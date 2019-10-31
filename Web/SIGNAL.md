# SIGNAL

<https://docs.djangoproject.com/en/2.2/topics/signals/>

### 시그널

> 회원가입을 할 때, 시그널을 보내 user profile을 따로 생성하는 것이 아니라 시그널을 통해 user 정보를 담은 profile을 자동으로 생성하도록 하는 기능이다.

* django 프레임워크는 어떤 특정한 일을 수행할 때마다 알려줄 것을 설정하고, 그 때에 지정한 동작을 수행할 수 있게 하는 신호(signal)를 발생하는 기능을 가지고 있다
* `signal` 이란 특정 액션이 발생하면 그 후 발생하는 이벤트이다.  여기서 post_save signal을 이용해서 DB model에 관련해서 save가 작동하면, 저장이 완료된 이후에 지정한 동작을 수행하게 한다.
* 회원가입 후 save가 작동하면 유저프로필을 만들게 하도록.

* accounts 폴더에 signals.py 생성

```python
# accounts/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Profile

# 저장한 이후에, 보내주는애는 User
from django.conf import settings

# User만들어진 것의 오브젝트, created 무언가 생성이 된건지 수정이 된건지?
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(instance, created, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)
```



```python
# accounts/apps.py
from django.apps import AppConfig

class AccountsConfig(AppConfig):
    name = 'accounts'
    def ready(self): #ready는 시그널과 관련된 함수이다.
        from .signals import create_user_profile
```



```python
# settings.py :: accounts를 주석처리 해준다.
# 'accounts',
'accounts.apps.AccountsConfig',
```



```python
# accounts/views.py :: 주석처리해줄 것
# Profile.objects.create(user=user)
```



### ready 메서드

AppConfig.ready
Subclasses can override this method to perform initialization tasks such as registering signals. It is called as soon as the registry is fully populated.

Although you can’t import models at the module-level where AppConfig classes are defined, you can import them in ready(), using either an import statement or get_model().

If you’re registering model signals, you can refer to the sender by its string label instead of using the model class itself.

```python
from django.db.models.signals import pre_save

def ready(self):
    # importing model classes
    from .models import MyModel  # or...
    MyModel = self.get_model('MyModel')

    # registering signals with the model's string label
    pre_save.connect(receiver, sender='app_label.MyModel')
```

