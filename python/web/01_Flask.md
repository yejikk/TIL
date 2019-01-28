## 01_Flask

* #### Flask란?

  * URL routing 및 페이지 Rendering을 위한 기본 사항을 제공하는 Web Application용 경량 python Framework를 말한다.

* #### @app.route('/')

  * URL 규칙을 받아 해당하는 규칙의 URL로 요청이 들어온 경우 **등록한 함수를 실행**하게끔 설정한다.

* #### template

  * Web browser, Application 응답은 복잡한 구조로 되어있는 데 이를 보다 쉽게 작성할 수 있게끔 도와주는 역할을 한다.
  * Flask는 templates 폴더 안의 template을 찾는다.
  * render_template()을 사용하여 template를 읽어온다.
  * 기본적으로 html 파일은 `templates/` 폴더 안에 만들어야 한다.

* #### web template

  * 변수와 제어문등을 포함하고, `html` 또는 `xml` 확장명을 가진다.

  * **web template**은 반복적인 일을 없애고, 내용을 디자인으로부터 분리해서 App을 관리하기 쉽게 만들어준다.

    (Jinja2 template 엔진 사용)

### html template 생성 <--> browser에서 볼 수 있도록 URL Mapping(.py 파일 사용)



## 190128 Flask

#### 1. http://0.0.0.0:8080/hi 접속

```python
@app.route('/hi')
def hi():
    return '안녕! 예지'
```

* `/hi` 로 요청이 들어왔으므로 **`hi`함수를 실행**하고, URL에 접속하면 **return 값인 안녕! 예지가 browser**에 나타난다.



#### 2.  http://0.0.0.0:8080/ 접속

```python
@app.route('/')
def hello():
    return reder_template('index.html')
```

```html
<!-- ! + Tab을 사용하여 html 구조를 만들어줌 -->

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>안녕안녕</h1>
</body>
</html>
```

* **render_template**가 'index_html' template으로 return 되어 'index_html' 템플릿과 URL을 mapping 시킨다.



#### 3.  http://0.0.0.0:8080/dday 접속

```python
import datetime # datetime 모듈을 사용해서 d-day를 계산

@app.route('/dday')
def dday():
    isnow = datetime.datetime.now() # now는 현재 날짜, 시간을 출력함
    end = datetime.datetime(2019, 5, 20) # 선택 날짜를 지정함
    result = end - isnow 
    result = result.days # d-day(날짜 수)만 출력하기 위해 .days 사용
    
    return f'{result}일 뒤에 휴가!'
	# flask에서 return은 반드시 string 형태가 되어야한다.
    # flask에서 int는 return 값이 될 수 없다!
```



#### 4.  http://0.0.0.0:8080/hi/<string:name>

```python
@app.route('/hi/<string:name>')
# name 공간 안에 인자를 넘겨줘야한다.
def greeting(name="예지"): # 오류 방지를 위하여 default 값을 지정
	return render_template('greeting.html', html_name=name)
```

```html
<!-- HEAD는 같으므로 제외 -->

<body>
    <!-- jinja2 템플릿 엔진을 사용하고 있음. -->
    {% if html_name == '재찬' %}
        <h2>{{html_name}} 왔니?</h2>
    {% else %}
        <h2>{{html_name}}님 오셨습니까.</h2>
    {% endif %}
<!-- template는 변수, 제어문 등을 포함하기 때문에 if문 사용가능
	하지만 제어문을 사용할 때에는 endif를 포함시켜 종료시켜줘야함
	{% 제어문 %} 형태로 되어 있음 -->
<!-- 또한 py파일에서 'greeting.html'뿐만 아니라, html_name이 인자로 들어왔기 
	때문에 이를 이용한다 {{ }} 을 사용한다 -->
</body>
</html>
```

* 만약, `html_name`에 재찬이 들어간다면 재찬아 왔니? 가 나타나며 다른 이름이 들어온다면 `html_name`님 오셨습니까 출력


#### 5. http://0.0.0.0:8080/movie

```python
@app.route('/movie')
def movie():
    movies = ['극한직업', '신비한 동물 사전', '그린북', '그린랜턴']
    # movies list 생성
    return render_template('movie.html', movies=movies)
	# render_template를 사용해 인자값 전달
```

```html
<body>
    <div class="container">
        <h1>영화목록</h1>
        <div class="row">
            {% for movie in movies %}
            <div class="col-12 col-sm-6 col-md-4 my-3">
                <div class="card">
                    <img src="https://picsum.photos/200/300/?random" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{movie}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            {% endfor %}
<!-- template는 반복문도 포함하기 때문에 받아온 movies list를 반복문에 이용해서 	card를 완성한다. 반복문을 종료하기 위해 {% endfor %}을 사용한다. -->
        </div>
    </div>
```



#### 6. http://0.0.0.0:8080/naver

```python
@app.route('/naver')
def naver():
    return render_template('naver_html')
```

```html
<body>
    <form action="https://search.naver.com/search.naver">
        <input type="text" name="query">
        <input type="submit" value="네이버검색">
    </form>
</body>

<!-- form tag 속성을 사용하여 input에 입력한 데이터를 https://search.naver.com/search.naver에 보내서 데이터를 처리하여 보내준다. -->
```

* **`form` tag  동작방법**

  * `form`이 있는 웹 페이지를 방문한다.
  * `form` 내용을 입력한다.
  * `form`안에 있는 모든 데이터를 웹 서버로 보낸다.
  * 웹 서버는 받은 `form` 데이터를 처리하기 위해 웹 프로그램으로 넘긴다.

  * 웹 프로그램은 `form` 데이터를 처리한다.
  * 처리결과에 따른 새로운 `html` 페이지를 웹 서버에 보낸다.
  * 웹 서버는 받은 html 페이지를 브라우저에 보낸다.
  * 브라우저는 받은 html 페이지를 보여준다.

* form tag 속성 `action` 사용

  * `form`을 전송할 서버 쪽 스크립트 파일을 지정한다.



#### 7. http://0.0.0.0:8080/ping & /pong

* `ping`에 접속해서 검색어를 입력하면 그 결과를 `pong` 페이지에서 바로 보여주기

```python
@app.route('/ping')
def ping():
	return render_template('ping.html')
```

```html
<form action="/pong">
    <input type="text" name="name">
    <input type="text" name="msg">
    <input type="submit">
</form>
```

* `form` tag를 사용하여 `/pong` 으로 input 데이터를 넘겨줄 것임. 

```python
# /ping을 거쳐 /pong에 도달
@app.route('/pong')
def pong():
    # ping에서 name에 있는 데이터들을 get해서 변수에 저장해줌.
    name = request.args.get('name')
    msg = request.args.get('msg')
    return render_template('pong.html', name=name, msg=msg)
# render_template을 사용해 pong.html에 도달하고, name과 msg를 넘겨준다.
```

```html
<h1>{{name}}!!!!!!!!!{{msg}}</h1>

<!-- ping에서 얻은 name과 msg가 넘겨져 이를 통해 {{name}}!!!!!!!!!!!{{msg}}가 출력된다. -->
```

* `ping`과 `pong` 함수와 템플릿(html)을 사용해서 `ping`에 입력한 input 데이터를 `pong` 에 넘겨 결과 값을 바로 `pong url`에 나타나도록 한다.
* `ping` 함수 -> `ping.html` + `form` (input을 위한 URL mapping) -> 얻은 data를 `pong`함수를 통해 넘김 -> `pong.html`에 보내진 data를 통해 URL을 mapping 시켜 최종 결과를 보여줌



#### 8. http://0.0.0.0:8080/opgg & /opggresult

* 위의 `ping` & `pong` 방법과 동일! 

```python
@app.route('/opgg')
def opgg():
    return render_template('opgg.html')
```

```html
<form action="/opggresult">
        <div class="index-logo d-flex justify-center align-content-center">
            <img src="https://attach.s.op.gg/logo/20190128090241.bcb4fa0f06c3a9deea6dc1798ce6ee5a.PNG" title="Awaken" alt="OP.GG Logo (Awaken)" class="Image">
        </div>
        <input type="text" name="username" class="summoner-search-form__text _suggest" placeholder="소환사명을 입력하세요" autocomplete="off">
        <button type="submit" class="summoner-search-form__button">검색<i class="__spSite __spSite-42"></i></button>
    </form>
```

```python
@app.route('/opggresult')
def opggresult():
    url = 'http://www.op.gg/summoner/userName='
    username = request.args.get('username')
    response = requests.get(url+username).text
    soup = BeautifulSoup(response, 'html.parser')
    wins = soup.select_one('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-summary > div.SideContent > div.TierBox.Box > div.SummonerRatingMedium > div.TierRankInfo > div.TierInfo > span.WinLose > span.wins')
    losses = soup.select_one('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-summary > div.SideContent > div.TierBox.Box > div.SummonerRatingMedium > div.TierRankInfo > div.TierInfo > span.WinLose > span.losses')
    return render_template('opggresult.html', username=username, wins=wins.text, losses=losses.text)
```

* `opgg`에서 얻은 `username`을 이용하여 전적을 받아온다.  
* 받아온 전적 `data`를 `opggresult.html`과 함께 전달한다.
  * `wins`와 `losses` 는 copy - selector을 이용하여 받아온다.

```html
<h1>{{username}}</h1>
<h2>{{wins}}</h2>
<h2>{{losses}}</h2>
```

* 위의 모든 과정을 통해 `/opgg` URL에서 `/opggresult` URL로 이동하게 되고 `username`, `wins`, `losses`가 출력되는 것을 알 수 있다.