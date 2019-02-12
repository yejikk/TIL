# 190212 Django template

```python
# views.py

def template_example(request):
    my_dict = {'name': 'kim', 'nickname': 'yeji', 'age': 25}
    my_list = ['짜장면', '짬뽕', '탕수육', '양장피']
    my_sentence = 'Life is short, you need python!'
    message = ['apple', 'banana', 'cucumber', 'mango']
    datetimenow = datetime.datetime.now()
    empty_list = []
        
    return render(request, 'template_example.html', {'my_dict': my_dict, 'my_list': my_list, 
    'my_sentence': my_sentence, 'message': message, 'empty_list': empty_list, 'datetimenow': datetimenow})
```



* ### 반복문

```html
<p>1. 반복문</p>
{% for menu in my_list %}
	<!-- 숫자를 변수로 해서 반환해주는 것이기 때문에 {{}}으로 나타낸다. -->
    {{ forloop.counter }} 
	<!-- count를 해줌 -->
    {% if forloop.first %} 
    <!-- 첫번째 loop일 때 반환-->
        <p>짜장면ㅇㅅㅇ</p>
    {% else %}
        <p>{{ menu }}</p>
    {% endif %}
{% endfor %}
```



* ### 조건문

```html
<p>2. 조건문</p>
<!-- in my_list : list 안에 있는지 -->
{% if '짜장면' in my_list %}
    <p>짜장면은 맛있다.</p>
{% endif %}
```



* #### length filter

  * `| length` : 글자 길이 

```html
<p>3. length filter 활용</p>
{% for msg in message %}
    {% if msg|length > 5 %}
        <p>글씨가 너무 길어요</p>
    {% else %}
        <p>{{ msg }}</p>
    {% endif %}
{% endfor %}
```



* ### lorem

```html
<p>4. lorem ipsum</p>
{% lorem %}
<hr>

<!-- 3개의 단어 -->
{% lorem 3 w %} 
<hr>

<!-- 4개의 단어가 random으로 바뀐다. -->
{% lorem 4 w random %}
<hr>

<!-- 4문단으로 나누어져서 기본 p tag로 출력된다. -->
{% lorem 4 p %}
```



* ### 글자 수 제한하기

```html
<p>5. 글자 수 제한하기(truncate)</p>
<!-- 3개의 단어로 제한한다. -->
<p>{{my_sentence|truncatewords:3}}</p>
<
<p>{{my_sentence|truncatechars:5}}</p>
```



* ### 글자 관련 필터

```html
<!-- string 중 하나를 choice해서 보여준다. -->
<p>{{ 'abc'|random }}</p>
```



* ### 연산

```html
<p>7. 연산 - django-mathfilters 쓰면 추가적으로 가능하긴 함. (쓰지않으면 add만 가능)</p>
<p>{{ 4|add:6 }}</p>
```



* ### 날짜 표현

```html
<p>8. 날짜 표현</p>
{% now "SHORT_DATETIME_FORMAT" %} <br>
{% now "DATETIME_FORMAT" %} <br>
{% now "SHORT_DATE_FORMAT" %} <br>
{% now "DATE_FORMAT" %} <br>
<!-- 요일까지 출력하기 l -->
{% now "Y년 m월 d일 (l) h:i" %} <br>
<!-- now를 굳이 안넘겨줘도 django에서 제공하는 지금 시간이 있기 때문에 오류가 나지 않는다.-->
<!-- now를 쓴 것은 다른 날짜를 넘겨줘야하는 경우가 생길 수도 있어서 (그 때는 now말고 다른 변수 사용)-->
<br>
{{ datetimenow|date:"SHORT_DATE_FORMAT" }}
<hr>
{{ 'http://google.com'|urlize }}
```



## utilities

app 하나하나 따로따로 관리해주기 위해서

template은 보여주기 위한 것이기 때문에 문법이 다양하지 않음

