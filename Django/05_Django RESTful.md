# 190311 Django RESTful

## REST

* REST = Representation State Transfer 



## REST 구성

* 자원(Resource) 
  * URI(Uniform Resource Identifier, 통합자원 식별자) = URL(Uniform Resource Locator, 통합 자원 지시자) + URN(Uniform Resource Name)
* 행위(Verb)
  * HTTP Method (GET, POST, PUT, DELETE)
* 표현(Representations)



## REST의 특징

1. Stateless (무상태성)
   * 작업을 위한 상태정보를 따로 저장하고 관리하지 않는다.
   * 별도로 저장하고 관리하지 않기 때문에 API 서버는 요청만을 처리하면된다.
2. Client-Server 구조
   * 클라이언트 서버에서 개발할 내용이 명확하고 의존성이 줄어듬
3. Cacheable (캐시가능)
   * HTTP의 캐시 기능이 적용 가능함
4. Self-descriptiveness (자체표현구조)
   * 무상태성 성격을 가지고 있으며, 세션 정보나 쿠키 정보를 별도로 저장하지 않고 관리하여 단순하게 요청만을 처리한다.
5. Uniform
   * Uniform Interface
   * 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 활용
6. 계층형 구조
   * REST 서버는 다중 계층으로 구성될 수 있음



## REST 중심 규칙

1. URL는 정보의 자원을 표현해야 한다.

   * URL에 불필요한 정보가 포함되면 안된다. 자원을 표현하는데에만 중점을 둬야한다.
     * 예를 들어 GET/users/read/1은 read가 불필요한 정보이다. 그렇기 때문에 GET/users/1로 표현해야 한다.

2. 자원에 대한 행위는 HTTP Method로 표현한다.

   * GET, POST, PUT, DELETE로 표혀한다.

     | METHOD | 역할                                                         |
     | ------ | ------------------------------------------------------------ |
     | POST   | POST를 통해 해당 URI를 요청하면 리소스를 생성한다.(새로운 자원을 생성한다.) |
     | GET    | GET을 통해 해당 리소스를 조회한다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다. |
     | PUT    | PUT을 통해 해당 리소스를 수정한다.                           |
     | DELETE | DELETE를 통해 리소스를 삭제한다                              |



## RESTful 설계

1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용한다.
2. URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
   * URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 한다. REST API는 분명한 URI를 만들어 통신을 해야하므로 혼동하지 않도록 URI 경로의 마지막에는 슬래시(/)를 사용하지 않는다.
3. 하이픈(-)은 URI 가독성을 높이는데에 사용한다.
4. 밑줄(_)은 URI에 사용하지 않는다.
   * 알아보기 어렵고, 밑줄로 인해 문자가 가려지기 때문이다.
5. URI 경로는 소문자로 작성한다.
   * 대소문자에 따라 다른 리소스로 인식하게 되기 때문에 URI 스카마와 호스트를 제외하고는 대소문자를 구별하도록 규정한다.
6. 파일 확장자는 URI에 포함시키지 않는다.



## 리소스 간의 관계를 표현하는 방법

```
/리소스명/리소스 ID/관계가 있는 다른 리소스명
ex) GET : /users/{userid}/devices 
```



## Django REST 

* app_name 설정

  ```python
  # urls.py
  app_name = 'student'
  ```

  * app_name을 설정하여 urlpattern의 이름이 같아도 혼동되지 않고 사용할 수 있다.



  ```python
  # urls.py
  urlpatterns = [
      path('', views.index, name='index'),
      path('new/', views.new, name='new'),
      path('<int:num>', views.detail, name='detail'),
  ]
  ```

  * name을 설정해준다.
    * name을 설정해주면 url 대신 name을 사용하여 url이 바뀌어도 변수의 개념이기 때문에 변경된 url로 적용되서 사용하기 편리하다.



  ```python
  # views.py
  def new(request):
      if request.method == 'POST':
          student = Student()
          student.name = request.POST.get('name')
          student.email = request.POST.get('email')
          student.birthday = request.POST.get('birthday')
          student.age = request.POST.get('age')
          student.save()
          return redirect('students:detail', student.pk)
      else:
          return render(request, 'students/new.html')
  ```

  * redirect('students:detail')

    * 설정한 app name을 name과 함께 써주어 같은 이름이어도 혼동되지 않게 한다.

  * 또한, 자원에 대한 적절한 Method를 적용하기 위해 `if`문을 사용하였다.

    * `if request.method == 'POST'` 의 의미는 POST 형태로 요청이 들어와야지 새로운 데이터를 생성한다는 뜻이다.

      (GET은 생성의 개념이 아니므로 POST형태를 써줘야만 적절하다.)



  ```python
  # html file
  <h2>{{board.pk}}</h2>
  <h2>{{board.title}}</h2>
  <a href="{% url 'boards:detail' board.pk %}">상세보기</a>
      <hr>
  ```

  * `html` 파일에서 url 주소를 사용하기 위해서는 `{% url 'boards:detail' board.pk %}` 을 사용한다.
    * `board.pk`는 variable routing을 할 때 사용하는 primary key를 나타내기 위해서이다.



  ```python
  <form method="POST">
  title : <input type="text" name="title">
  content : <textarea name="content"></textarea>
  <input type="submit" value="submit">
  {% csrf_token %}
  </form>
  ```

  * `form`에 action을 쓰지 않는 이유는 POST 방식으로 요청을 하기 때문에 그대로 응답이 오기 때문에 action을 쓰지 않아도 저장이 되기 때문이다.



* render, redirects는 HTTPRESPONSE에 해당된다.