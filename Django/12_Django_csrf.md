# 12_Django_CSRF

>Django에서는 사용자가 아닌 공격자가 POST, PUT, DELETE등의 요청을 사용자의 의도와 다르게 방해하여 특정 웹사이트에 요청 공격하는 것을 막기 위하여 기본적으로 CSRF 토큰을 제공한다.

> Django Template에서는 `{% csrf_token %}`을 작성하면 토큰을 주고받을 수 있다. 클라이언트는 `csrf_token`을 Django에서 받고 이는 cookie에 저장되고, POST 전송을 할때 cookie에 저장되어있는 `csrf_token`이 함께 전송된다.



## 다른 서버에서 Django 서버로 POST 요청을 보낼 경우

* 이 경우 `csrf_token` 을 사용할 수 없으므로 403 error가 나게 된다.

  이를 해결하기 위하여  `csrf_token` 을 비활성화 시켜야한다.



## csrf_token 비활성화

1. `views.py` 에서 비활성화

   * `@csrf_exempt` decorator를 사용한다.

   ```python
   from django.views.decorators.csrf import csrf_exempt
   
   @csrf_exempt
   def index(request):
     ...
   ```

2. `settings.py` middleware 제거

   * `settings.py` middleware를 제거하여 프로젝트 전체 `csrf` 를 비활성화 시킨다.

   ```python
   MIDDLEWARE = [
       'django.middleware.security.SecurityMiddleware',
       'django.contrib.sessions.middleware.SessionMiddleware',
       'django.middleware.common.CommonMiddleware',
       # 'django.middleware.csrf.CsrfViewMiddleware', //csrf
       'django.contrib.auth.middleware.AuthenticationMiddleware',
       'django.contrib.messages.middleware.MessageMiddleware',
       'django.middleware.clickjacking.XFrameOptionsMiddleware',
   ]
   ```

   