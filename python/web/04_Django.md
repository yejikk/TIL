# 190211 Django

## 1. 시작하기

1. 프로젝트 시작하기

   ```bash
   $ django-admin startproject 프로젝트이름
   ```

   아래와 같이 프로젝트 구조가 만들어진다.

   ```text
   django_intro/
   	django_intro/
   		__init__.py
   		settings.py
   		urls.py
   		wsgi.py
   	db.sqlite3
   	manage.py
   ```

   지금부터 pwd(현재 디렉토리)는 `~/workspace/django_intro`이다.

   

2. 서버 실행하기

   * `settings.py` 설정

     ```python
     ALLOWED_HOST = ['*']
     # C9에서는 host - 0.0.0.0, port - 8080만 활용할 수 있기 때문에 위와 같이 설정한다. 
     ```

   ```bash
   ~/workspace/django_intro $ python manage.py runserver 0.0.0.0:8080
   ```

   앞으로 모든 장고 명령어는 프로젝트를 만들 때는 제외하고 `python manage.py`를 활용한다. 

   따라서, 명령어가 안될 때는 반드시 `pwd`와 `ls`를 통해 현재 bash(터미널) 위치를 확인하자!



## 2. hello, django

> Django 프로젝트는 여러가지 app의 집합이다.
>
> 각각의 app은 MTV 패턴으로 구성되어 있다.
>
> M (Model) : 어플리케이션의 핵심 로직의 동작을 수행한다. (class만들고 했던 것이 model)
>
> T (Template) : 사용자에게 결과물을 보여준다.
>
> V (View) : 모델과 템플릿의 동작을 제어한다. (모델의 상태를 변경하거나 값을 가져오고, 템플릿에 값을 전달하기 등)
>
> **일반적으로 MVC패턴으로 더 많이 사용된다.**

### 기본 로직

앞으로 우리는 1. 요청 url 설정(`urls.py`) 2. 처리 할 view 설정(`view.py`) 3. 결과 보여줄 template 설정(`templates`/)으로 작성할 것이다.

1. url 설정

   * `from appname import views`을 꼭 써줘야 한다.

   ```python
   '''
   django_intro/urls.py
   @app.route를 다 이곳에서 관리한다.
   '''
   from django.contrib import admin
   from django.urls import path
   # home 폴더 내에 있는 views.py를 불러온다.
   from home import views
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       # 요청이 home/으로 오면, views의 index 함수를 실행시킨다.
       path('home/', views.index)
   ]
   
   ```

2. view 설정

   * views를 만들어주기 위해서는 app을 추가해야한다.
     * `python manage.py startapp app이름` : bash에 쳐서 만들어주기
     * **project는 여러가지 app들로 구성**되어 있다. (project안에 묶여있음 db속 table과 비슷)
       - 이 app들은 M(model)T(templates)V(view)로 구성되어 있다.
     * `settings.py` 에 가서  `INSTALLED_APPS`에  app을 추가해줘야 한다. (그래야 실행이 된다.)

   ```python
   # home/views.py
   from django.shortcuts import render, HttpResponse
   
   # Create your views here.
   def index(request):
       # 요청 정보를 django 내부에서 전달한다. (django로 들어온다?)
       print(request)
       print(type(request))
       print(request.META)
       return HttpResponse('hello, django!')
   ```

   * 주의할 점은 선언된 함수에서 `request`를 인자로 받아야 한다.
     * request는 사용자(클라이언트)의 요청 정보와 서버에 대한 정보가 담겨 있다.
     * Django 내부에서 해당 함수를 호출하면서 정보를 넘겨주기 때문에 반드시 명시해줘야한다.



## 3. Template (MTV - T)

> Django에서 활용되는 Template은 DTL(Django Template Language)이다.
>
> jinja2와 문법이 유사하다.

1. 요청 url 설정

   ```python
   path('home/dinner/', views.dinner)
   ```

2.  view 설정

   ```python
   def dinner(request):
       box = ['치킨', '피자', '초밥']
       dinner = random.choice(box)
       return render(request, 'dinner.html', {'dinner': dinner})
   ```

   * Template을 리턴하려면, `render`을 사용하여야 한다.
     * `request` (필수)
     * `template 파일 이름` (필수)
     * `template에서 쓸 변수` (선택) : 반드시 `dictionary` 타입으로 구성해야 한다.

3. Template 설정

   ```bash
   $ mkdir home/templates
   $ touch home/templates/dinner.html
   ```

   ```django
   <!-- home/template/dinner.html -->
   <h1>
       {{dinner}}
   </h1>
   ```



## 4. Variable Routing

1. url 설정

   ```python
   path('home/you/<name>/', views.you),
   path('home/cube/<int:num>', views.cube)
   ```

2. view 파일 설정

   ```python
   def you(request, name):
       return render(request, 'you.html', {'name': name})
   ```

3. template 파일 설정

   ```django
   <h1> {{name}}, 안녕!!! </h1>
   ```

   

## 5. Form data

1. `ping`

   1. 요청 url 설정

      ```python
      path('home/ping/', views.ping)
      ```

   2. view 설정

      ```python
      def ping(request):
          return render(request, 'ping.html')
      ```

   3. template 설정

      ```html
      <form action='home/pong/'>
          <input name="message" type="text">
          <input type="submit">
      </form>
      ```

2. `pong`

   1. 요청 url 설정

      ```python
      path('home/pong/', views.pong)
      ```

   2. view 설정

      ```python
      def pong(request):
          message = request.GET.get('message')
          return render(request, 'pong.html', {'message': message})
      ```

   3. template 설정

      ```html
      <h1>
          {{message}}
      </h1>
      ```

* POST 요청 처리

  1. 요청 form 수정

     ```django
     <form action="/home/pong/" method="POST">
         {% csrf_token %}
     </form>
     ```

  2. view 수정

     ```python
     def pong(request):
         message = request.POST.get('message')
     ```

  * `csrf_token` 은 보안을 위해 django에서 기본적으로 설정되어 있는 것이다.
    * form을 통해 POST 요청을 보낸다는 것은 데이터베이스에 반영되는 경우가 대부분인데, 해당 요청을 우리가 만든 정해진 form에서 보내는지 검증하는 것.
    * 실제로 input type hidden으로 특정한 hash값이 담겨 있는 것을 볼 수 있다.
    * `settings.py` 에 `MIDDLEWARE` 설정에 보면 csrf 관련된 내용이 설정된 것을 볼 수 있다.



BASE_DIR : 기본적인 디렉토리

INSTALLED_APPS : 마지막에 ,를 찍어서 계속 추가를 할 수 있도록 함

TEMPLATES : 거의 건들지 않음

LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'



* python manage.py startapp home
  * project --> 여러가지 app들로 구성되어 있다. (project안에 묶여있음 db속 table과 비슷)
    * 이 app들은 M(model)T(templates)V(view)로 구성되어 있다.
  * settings.py 가서 내  project이름 추가해줘야함!



* python manage.py runserver 0.0.0.0:8080

* jinja template 공부하기



* Django에서 POST방식 : {% csrf_token %}을 추가해줘야함 (보안상의 이유로 추가해주지않으면 아예 페이지가 뜨지 않음.) 사이트 간 요청 위조가 일어날 수도 있기 때문에(flask와의 차이점)