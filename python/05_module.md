# 190108 | module

#### 1) `import`

* module을 활용하기 위해서는 반드시 `import` 문을 통해 내장 모듈을 이름 공간으로 가져와야한다.

```python
import random
print(dir(random))
-> ['BPF', 'LOG4', 'NV_MAGICCONST', 'RECIP_BPF', 'Random', 'SG_MAGICCONST', 'SystemRandom', 'TWOPI', '_BuiltinMethodType', '_MethodType', '_Sequence', '_Set', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', '_acos', '_bisect', '_ceil', '_cos', '_e', '_exp', '_inst', '_itertools', '_log', '_pi', '_random', '_sha512', '_sin', '_sqrt', '_test', '_test_generator', '_urandom', '_warn', 'betavariate', 'choice', 'choices', 'expovariate', 'gammavariate', 'gauss', 'getrandbits', 'getstate', 'lognormvariate', 'normalvariate', 'paretovariate', 'randint', 'random', 'randrange', 'sample', 'seed', 'setstate', 'shuffle', 'triangular', 'uniform', 'vonmisesvariate', 'weibullvariate']
```

#### 2) `from` 모듈명 `import` 어트리뷰트

* 특정한 함수 혹은 어트리뷰트만 활용하고 싶을 때, 위와 같이 작성한다.

```python
# beautifulsoup를 사용하기 위하여
from bs4 import BeautifulSoup

# random 모듈 중 sample 함수를 사용하기 위해
from random import sample
```

#### 3) `from` 모듈명 `import` *

* 해당하는 모듈 내의 모든 변수, 함수, 클래스를 가져온다.

#### 4) `from` 모듈명 `import` 어트리뷰트 `as`

* 내가 지정하는 이름을 붙여서 가져온다.

## 숫자 관련 함수

### 수학 관련 함수 -> import math (math 불러오기)

* `math.pi` : 원주율 pi
* `math.e` : 자연 상수 e
* `math.ceil(x)` : 소수점 올림

* `math.floor(x)` : 소수점 내림
* `math.trunc(x)` : 소수점 버림
* `math.copysign(x, y)` : y의 부호를 x에 적용한 값
* `math.fabs(x)` : float 절대값 (복소수 오류 발생)
* `math.factorial(x)` : 팩토리얼 계산 값
* `math.fmod(x, y)` : float 나머지 계산
* `math.fsum(iterable)` : float 합
* `math.modf(x)` : 소수부 정수부 분리
* `math.pow(x, y)` : x의 y승 결과
* `math.sqrt(x)` : x의 제곱근의 결과
* `math.exp(x)` : e^x 결과
* `math.log(x, base)` : 밑을 base로 하는 logx

## 난수 발생관련 함수 (import random)

* `random.random()` : 난수 생성
* `random.randint()` : 임의의 정수 반환

* `random.sample(range, num)` : 범위 안에서 num만큼 랜덤으로 뽑아 반환
* `random.seed()` : 시드 설정 (시드 설정을 하지 않으면 현재 시간을 기반으로 만듬)
* `random.shuffle` : 시퀀스 객체를 섞음

## 날짜 관련 모듈 (import datetime)

* `datetime.datetime.now()` : 지금을 출력한다.
* `datetime.datetime.today()` : 오늘을 출력한다.
* 시간 형식지정

| 형식 지시자(directive) | 의미                   |
| ---------------------- | ---------------------- |
| %y                     | 연도표기(00~99)        |
| %Y                     | 연도표기(전체)         |
| %b                     | 월 이름(축약)          |
| %B                     | 월 이름(전체)          |
| %m                     | 월 숫자(01~12)         |
| %d                     | 일(01~31)              |
| %H                     | 24시간 기준(00~23)     |
| %I                     | 12시간 기준(01~12)     |
| %M                     | 분(00~59)              |
| %S                     | 초(00~61)              |
| %p                     | 오전/오후              |
| %a                     | 요일(축약)             |
| %A                     | 요일(전체)             |
| %w                     | 요일(숫자 : 일요일(0)) |
| %j                     | 1월 1일부터 누적 날짜  |

* 

| 속성/메소드 | 내용                 |
| ----------- | -------------------- |
| .year       | 년                   |
| .month      | 월                   |
| .day        | 일                   |
| .hour       | 시                   |
| .minute     | 분                   |
| .second     | 초                   |
| .weekday()  | 월요일을 0부터 6까지 |