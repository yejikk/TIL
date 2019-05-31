# 190102 | python_intro

## 1. 식별자

* python 에서 식별자는 변수, 함수, 모듈, 클래스 등을 식별하는데 사용되는 이름이다.
* 아래의 예약어는 사용할 수 없다.

``` python
import keyword
print(keyword.kwlist)
```

* 내장함수나 모듈 등의 이름으로도 만들면 안된다.

## 2. 변수 및 자료형

* 변수의 자료형을 확인하기 위해서는 `type()` 을 활용한다.
* 변수의 메모리 주소를 확인하기 위해서는 `id()` 를 활용한다.

#### 수치형(Number)

1) `int` (정수)

2) `float` (실수)

* 실수의 뺄셈을 할 떄, 3.5-3.12 = 0.37999999999 라고 나옴

  이럴 때 값을 우리가 원하는 대로 출력하기 위해서

  ``` python
  round(3.5-3.12, 2)
  # 반올림해서 소수점 두번째 자리까지 출력한다.
  ```

3) `complex` (복소수)

* 복소수는 허수부를 `j`로 표현한다.

```python
a = 3 + 4j
print(a.img) # 허수부 출력
print(a.real) # 실수부 출력
print(a.conjugate()) # 켤례복소수 출력
```

4) `Bool` 

* `True`와 `False`로 이뤄진 `Bool` 타입
* 비교/논리 연산을 수행하는데 활용
* `0, 0.0, (), [], {}, ' ', None` 과 같이 값이 없는 것은 `False`로 변환된다.

5) `None`

* 값이 없음 또는 값을 초기화하기 위해서 사용한다.

#### 자료형(String)

1) 여러줄 출력하기

``` python
print("""
안녕,
여러줄 출력
""")
```

* string interpolation에서도 여러줄 출력이 가능함

```python
print(f"""
안녕,
{name}
""")
```

2) 이스케이프 문자열 : 공백, tab 등 외우기

3) String interpolation

* %-formatting

```python
name = 'kim'
print("hello, %s" %name)
```

* str.format()

```python
name = 'ye'
print("hello, {}".format(name))
```

* f-string

```python
name = 'ji'
print(f"hello, {name}")
```

f-string에서는 형식을 지정할 수 있다.

``` python
print(f'{today : %y}년, {today : %m}월 {today : %d}일 {today : %A}'입니다.)
```

#### 기타 연산자

1) `Concatenation` 

: 숫자가 아닌 자료형은 `+` 연산자를 통해 합칠 수 있다.

2) `Containment Test`

: `in` 연산자를 통해 속해있는지 여부를 확인할 수 있다.

3) `Indexing/Slicing`

: `[]`를 통한 값 접근 및 `[:]`을 통한 슬라이싱

#### 기초 형변환

1) 암시적 형변환 

: `False`=0, `True`=1

2) 형변환은 더 넓은 범위의 것으로 바뀜

: `int + float = float` , `int + complex = complex` 

3) 명시적 형변환

* string -> integer : 형식에 맞는 숫자만 가능

  (string은 글씨가 숫자일 때만 형변환이 가능하다.)

  (string 3.5를 int로 변환할 수는 없다.)

* integer -> string : 모두 가능

### 시퀀스(sequence) 자료형

1) `list`

* `list`는 대괄호 []를 통해 만들 수 있다.
* 값에 대한 접근은 `list[i]`를 통해 한다.
* 빈 리스트 만들기 : `list = []`

2) `tuple`

* `tuple`은 `()`로 묶어서 표현한다.
* `tuple`은 수정 불가능하며 읽을 수 밖에 없다.
* 직접 사용하는 것보다는 파이썬 내부에서 사용하고 있다.

3) `range` : 숫자의 시퀀스를 나타내기 위해 사용

* 기본형 `range(n)`

  : 0부터 n-1까지 값을 가짐

* 범위 지정 `range(n, m)`

  : n부터 m-1까지 값을 가짐

* 범위 및 스텝 지정 `range(n, m, s)`

  : n부터 m-1까지 +s만큼 증가한다. (s자리에 마이너스를 붙이면 감소한다.)

4) `set` 

* `set`는 수학에서의 집합과 동일하게 처리된다.
* `set`는 중괄호 `{}` 를 통해 만들며, 순서가 없고 중복된 값이 없다.
* `set`을 활용하면 `list`의 중복된 값을 손쉽게 제거할 수 있다.

``` python
a = [1, 1, 2, 4]
set(a) # set로 만들기
list(set(a)) # 다시 list로 만들기
```

5) `dictionary`

* `dictionary`는 `key`와 `value`와 쌍으로 이뤄져있다.
* `{}`를 통해 만들며, `dict()`로 만들 수도 있다.
* `value`는 `list`, `dictionary`를 포함한 모든 것이 가능하다.

``` python
# 비어있는 dictionary를 두가지 방법으로 만들기
dict_a = dict()
dict_b = {}
```