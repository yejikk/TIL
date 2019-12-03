# 13_Django_유효성검사

> Django에서 유효성을 검사하는 것은 3단계가 있다.



## Form을 통한 Validation 

1. `HTML`
   * `HTML` 에서 `require`을 쓰면 브라우저에서 `require`을 만족하지 않을 시 다음 단계로 작동하지 않는다.
   * `브라우저` 자체에서 막아준다.



2. `Django form`
   * `is_vaild`를 사용하여 `form`에 있는 값을 검사한다.
   * 만약 `blank=True`라면, `form` 이 비어있어도 `is_valid` 를 통과할 수 있다.



3. `Database` 
   * `is_valid` 로 통과하더라도 Django에서 지정한 스키마는 기본적으로 `null=False`로 되어있기 때문에 `null` 을  허용하지 않는다.
   * 그렇기 때문에 `null` 상태로 `Database`에 저장까지 완료하려면 `null=True`도 모델링을 할 때 추가해줘야한다.
     * 하지만 `CharField, TextField`는 Database로 넘어 올 때 값이 없어도 `''` 공백으로 넘어오기 때문에 `null=True`값을 추가해주지 않아도 된다.



## Models를 통한 Validation

* `django.core.validators`를 사용하여 유효성 검사를 할 수 있다.

* `django`에서 email, url, length 등 다양한 종류의 validator를 제공한다.

* `models.py`안에 import 한 후 사용한다.

  ```python
  # models.py
  from django.db import models
  from django.core.validators import EmailValidator
  
  # Create your models here.
  class User(models.Model):
      email = models.EmailValidator(validators=EmailValidator)
      name = models.CharField(max_length=10)
  ```

  ```
  Error: Enter a valid email address
  ```