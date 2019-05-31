```python
# import하는 순서
# 1. 파이썬 표준 라이브러리 : os, randon, datetime ..
# 2. Core Django : 장고 프레임워크에 있는 것
from django.shortcuts import render
# 3. 3rd parth library : django_extensions
# 4. 장고 프로젝트 App
from .models import Board 
# 현재 디렉토리의 모델, 내가 만들었으면 앞에 .을 붙여준다 | 명시적 상대 import vs 암묵적 상태 import(from models import Board) 
```

````python
title = request.POST.get('title') # POST['title']과 동일하다. (dictionary에서 값을 꺼내기 때문에)
````



```python
def index(request):
    # boards = Board.objects.all() 
    # [::-1]을 붙여서 거꾸로 출력해도 됨, python이 거꾸로 돌려준다.
    # order_by를 쓰면 all()을 안써도 된다.
    
    # 쿼리를 이용해서 내가 원하는 방식으로 db table을 가져온다.
    boards = Board.objects.order_by('-id') # 거꾸로 출력하기, sql을 이용해서 거꾸로
    return render(request, 'boards/index.html', {'boards': boards})
```



## url

1. `<a href='/'>` 
   * 처음에 `/` 를 붙여 줘야한다.

2. `<form action="/">` : 
   * 무조건 처음에 `/`를 붙여줘야함
   * POST 방식은 뒤에도 `/`를 붙여줘야하기 때문에 헷갈리면 GET도 붙여주기

3. `redirect('/')` 
   * 처음에 `/`를 붙여줘야하고, 뒤는 붙여줘도 되고 안 붙여줘도 된다. 

* 1, 2, 3은 요청을 하는 입장이기 때문에 `/`를 붙여줘야 한다.

4. `url.py`
   * 요청을 받는 입장이기 때문에 처음에 `/` 을 붙여주지 않는다.