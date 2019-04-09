# 190408 Django | signup, login, logout

>  user(사용자) 정보 (Django에서 상속받아서 사용함)

>  signup(회원가입), login, logout crud

> Django에 내장된 인증 체계는 `django.contrib.auth`라는 경로인 python 패키지에 모여있다.



## CRUD

#### 1. signup (회원가입)

* **urls.py**

  ```python
  app_name = 'accounts'
  
  urlpatterns = [
      path('signup/', views.signup, name='signup'),
  ]
  ```

* **views.py**

  * 내장 모듈 **UserCreationForm**을 사용하여 회원가입 Form을 생성한다.
    * 회원가입용도 Form

  ```python
  from django.shortcuts import render, redirect
  # 회원가입을 위한 django의 내장 모듈인 UserCreationForm을 import해준다.
  from django.contrib.auth.forms import UserCreationForm
  from django.contrib.auth import login as auth_login
  
  def signup(request):
      # 만약 인증된 사용자라면, 회원가입을 못하도록 방지
      if request.user.is_authenticated:
          return redirect('boards:index') # redirect 시킴
      
      if request.methode == 'POST':
          user_form = UserCreationForm(request.POST)
          # 만약 user_form에 값이 존재한다면, 
          # 저장해준후 로그인을 시켜준다
          # (from django.contrib.auth import login as auth_login을 import 시켜준다.)
          if user_form.is_valid():
              user = user_form.save()
              auth_login(request, user)
              return redirect('boards:index')
       # POST 방식으로 요청이 들어오지 않는다면 sign.html로 return하여 계속해서 회원가입 form을 보여준다. (db에 절대 save되지않음) 
       else:
          user_form = UserCreationForm()
       context = {'user_form': user_form}
       return render(request, 'accounts/signup.html', context)
  ```

* **signup.html**

  ```html
  <!-- 가독성을 위하여 crispy를 사용한다. -->
  {% load crispy_forms_tags %}
  <form method='POST'>
      {% csrf_token %}
      {{ user_form | crispy}}
      <input type="submit" value="회원가입신청">
  </form>
  ```



#### 2. login(로그인)

* **urls.py**

  ```python
  urlpatterns = [
      path('login/', views.login, name='login')
  ]
  ```

* **views.py**

  * **AuthenticationForm**은 현재 이용자 정보와 HTTP 요청 정보를 담은 `request` 객체를 인자로 전달 받아 `세션 처리`를 한다.
    * 로그인용도 Form이며 세션을 추가한다.
  * **auth_login()** 함수를 이용하여 로그인 인증처리를 마무리 한다.
    * 로그인 양식을 이용해 이용자 정보를 가져와서 HTTP 요청(request)정보와 함께 서버 세션 정보를 생성한다.

  ```python
  # login을 위해 Django에 내장된 login 뷰 함수를 사용한다.
  from django.contrib.auth import login as auth_login
  # login을 위한 Form 함수를 import 한다.
  from django.contrib.auth.forms import AuthenticationForm
  
  def login(request):
      if request.user.is_authenticated():
          return redirect('boards:index')
      if request.method == 'POST':
          login_form = AuthenticationForm(request, request.POST)
          if login_from.is_vaild():
              # 사용자 관련 정보만 뽑아서 세션을 만들어주는 method
              auth_login(request, login_form.get_user())
      		return redirect('boards:index')
      else:
          login_form = AuthenticationForm()
      context = {'login_form': login_form}
      return render(request, 'accounts/login.html', context)
  ```

* **login.html**

  ```html
  {% load crispy_forms_tags %}
  <form method="POST">
      {% csrf_token %}
      {{ login_form|crispy }}
      <input type="submit" value="로그인">
  </form>
  {% endblock %}
  ```



#### 3. logout(로그아웃)

* **urls.py**

  ```python
  urlpatterns = [
      path('logout/', views.logout, name='logout'),
  ]
  ```

* **views.py**

  ```python
  # logout을 위해 내장 뷰 함수를 사용한다.
  from django.contrib.auth import logout as auth_logout
  # login을 요구하는 함수
  from django.contrib.auth.decorators import login_required
  
  @login_required
  def logout(request):
     	auth_logout(request)
      return redirect('boards:index')
  ```



## 추가 내용

* `python manage.py shell_plus` : 필요한 모델들을 자동으로 import해준다. 



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



* `django.contrib.auth` : Django에 내장된 인증 체계 (로그인, 회원가입과 관련된 내장 함수 패키지)



* `from django.contrib.auth.forms import UserCreationForm` : password 암호화 저장 모듈



* `from django.contrib.auth.forms import UserCreationForm, AuthenticationForm`
  * **UserCreationForm** : 회원가입용도
  * **AuthenticationForm** : 로그인 용도



* `auth_login(request, login_form.get_user())` : 사용자 관련 정보만 뽑아서 세션을 만들어주는 method



* `AuthenticationForm(request, request.POST)` : http 관련 정보도 얻어와야하기 때문에 request도 넣어줘야함







