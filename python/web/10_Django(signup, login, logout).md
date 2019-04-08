# 190408 Django | signup, login, logout

>  user(사용자) 정보 (Django에서 상속받아서 사용함)

>  signup(회원가입), login, logout crud



## CRUD

1. #### signup (회원가입)



## 추가 내용

* `User.objects.all()` : 사용자 모두 보기



* **user** 보는 방법

  ```python
  from django.contrib.auth.models import Group, Permission, User
  ```

  ```python
  from django.contrib.auth import get_user_model
  ```



* `User = get_user_model()` : user object 



* **password 암호화** 

  ```bash
  u = User.objects.create_user('yeji', 'dpwl7484@gmail.com', '123123')
  ```

  * `create_user`을 사용해야 password를 암호화 시킬 수 있다.
  * 만약, `create_user`을 사용하지 않으면 password가 int, string형태로 저장되어 암호화되지 않는다.

* **password 암호화 확인방법**

  * `u.check_password('123123')`
  * 만약, `create_user`를 사용하지 않았다면 False가 뜸 (암호화 한 것과 matching이 되지 않음.)



* `django.contrib.auth` : 로그인, 회원가입과 관련된 모듈



* `from django.contrib.auth.forms import UserCreationForm` : password 암호화 저장 모듈



* `from django.contrib.auth.forms import UserCreationForm, AuthenticationForm`
  * **UserCreationForm** : 회원가입용도
  * **AuthenticationForm** : 로그인 용도



* `auth_login(request, login_form.get_user())` : 사용자 관련 정보만 뽑아서 세션을 만들어주는 method



* `AuthenticationForm(request, request.POST)` : http 관련 정보도 얻어와야하기 때문에 request도 넣어줘야함







