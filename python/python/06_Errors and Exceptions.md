# 190109 | Errors and Exceptions

### 1) 문법 에러 (Syntax Error)

* 가장 많이 만날 수 있는 에러로 발생한 `파일 이름`과 `줄`, `^` 을 통해 파이썬이 읽어 들일 때(perser)의 문제 발생 위치를 표현한다.

```python
if True:
    print('참')
else 
	print('거짓')
# SyntaxError 발생!
# invalid syntax 
# else 옆 : 이 빠짐
```

```python
print('hi)
# SyntaxError 발생!
# EOL while scanning string literal
# ' 가 안끝남
```

```python
print('hi'
# SyntaxError 발생!
# unexpected EOF while parsing
# ) 가 빠짐
```

*  정확한 위치를 지정하지 않을 수도 있으므로 앞뒤로 모두 확인해야함.

### 2) 예외 (Exception)

* 문법이나 표현식이 바르게 되어있지만, 실행시 발생하는 에러이다.

```python
# ZeroDivisionError 확인
10 / 0
=>
ZeroDivisionError                         Traceback (most recent call last)
<ipython-input-5-1a1c9c3dae95> in <module>
      1 # ZeroDivisionError를 확인
----> 2 10 / 0

ZeroDivisionError: division by zero
```

```python
# NameError를 확인
print(name) # name이라는 공간이 정의되지 않음.
=>
NameError                                 Traceback (most recent call last)
<ipython-input-6-024ad59917af> in <module>
      1 # NameError를 확인
----> 2 print(name)

NameError: name 'name' is not defined

# 이 Error가 발생했을 때 확인해야할 것!
# 1. 오타가 없는지 (호출이 잘못된 경우)
# 2. 변수 선언을 했는지
```

``` python
# 함수 호출과정에서 TypeError도 발생
round('24,5')
=>
TypeError                                 Traceback (most recent call last)
<ipython-input-8-a75ca1e9fb25> in <module>
      1 # 함수 호출과정에서 TypeError도 발생
----> 2 round('24,5')

TypeError: type str doesn't define __round__ method
```

```python
# 함수호출 과정에서 다양한 오류를 확인 : 필수 argument 누락 
import random
random.sample([1,2])
=>
TypeError                                 Traceback (most recent call last)
<ipython-input-9-97e306905de6> in <module>
      1 # 함수호출 과정에서 다양한 오류를 확인 : 필수 argument 누락
      2 import random
----> 3 random.sample([1,2])

TypeError: sample() missing 1 required positional argument: 'k'
# random.sample([1,2], k) k가 빠져서 오류
```

```python
# 함수호출 과정에서 다양한 오류를 확인 : argument 많은 경우
random.choice([1, 2], 1)
=>
TypeError                                 Traceback (most recent call last)
<ipython-input-10-f207298f5559> in <module>
      1 # 함수호출 과정에서 다양한 오류를 확인 : argument 많은 경우
----> 2 random.choice([1, 2], 1)

TypeError: choice() takes 2 positional arguments but 3 were given
```

``` python
# ValueError를 확인
int('3.5')
# 타입은 맞는데, 값이 다르게 된 경우!!
=>
ValueError                                Traceback (most recent call last)
<ipython-input-12-ef39a97c788f> in <module>
      1 # ValueError를 확인
----> 2 int('3.5')
      3 # 타입은 맞는데, 값이 다르게 된 경우!!

ValueError: invalid literal for int() with base 10: '3.5'

```

```python
# ValueError를 확인
a = [1, 2, 3]
a.index(100)
=>
ValueError                                Traceback (most recent call last)
<ipython-input-13-eaf459ec9a4f> in <module>
      1 # ValueError를 확인
      2 a = [1, 2, 3]
----> 3 a.index(100)

ValueError: 100 is not in list
```

```python
# IndexError를 확인해봅시다.
a = [1, 2]
a[6]
=>
IndexError                                Traceback (most recent call last)
<ipython-input-14-c6b017da5f48> in <module>
      1 # IndexError를 확인해봅시다.
      2 a = [1, 2]
----> 3 a[6]

IndexError: list index out of range

# index를 벗어남, 이 때는 길이조절을 반드시 해야한다!
```

```python
# KeyError를 확인
song_list = {'sia' : 'candy cane lane'}
song_list.key = {'queen'}
=>
AttributeError                            Traceback (most recent call last)
<ipython-input-17-b5c0c5b60a8f> in <module>
      1 # KeyError를 확인해봅시다.
      2 song_list = {'sia' : 'candy cane lane'}
----> 3 song_list.key = {'queen'}

AttributeError: 'dict' object has no attribute 'key'
```

## 예외처리

### `try` `except`

: `try` 구문을 이용하여 예외 처리를 할 수 있다.

```python
try:
    codeblock1
except 예외:
    codeblock2
```

- `try`절이 실행된다.
- 예외가 발생되지 않으면, `except`없이 실행이 종료된다
- 예외가 중간에 발생하면, 남은 부분을 수행하지 않고, `except`가 실행된다.

- 두 가지 예외를 모두 처리할 수 있다.

```python
# 복수의 예외 처리
try:
    codeblock1
except (예외1, 예외2):
    codeblock2
```

* 각각 다른 오류를 출력할 수 있다.

```python
try:
    num  = input('값을 입력하세요: ')
    print(100/int(num))
except ValueError:
    print('정수를 입력해!')
except ZeroDivisionError:
    print('0로 나눌 수 없어!!')
    
# Error가 순차적으로 수행됨으로, 가장 작은 범주부터 시작해야함.
```

* 에러 문구 처리 : 예외 문구를 함께 넘겨줄 수 있다.

```python
try:
    codeblock1
except 예외 as e:
    codeblock2
```

* `else` : 에러가 발생하지 않는 경우 수행되는 문장

```python
try:
    codeblock1
except 예외:
    codeblock2
else:
    codeblock3
```

* `finally` : 반드시 수행해야하는 문장 `finally` 를 활용한다.

```python
try:
    codeblock1
except 예외:
    codeblock2
finally:
    codeblock3
```

* `raise`를 통해 예외를 발생시킬 수 있다.

```python
# 인자를 넘겨줄 수도 있다.
raise ValueError('코드 잘짜자....')
=>
ValueError                                Traceback (most recent call last)
<ipython-input-49-ebd55ff3a09c> in <module>
      1 # 인자를 넘겨줄 수도 있다.
----> 2 raise ValueError('코드 잘짜자....')

ValueError: 코드 잘짜자....
```

* `assert` : 예외를 발생시키는 다른 방법 (보통 상태를 검증하는데 사용되며 무조건 AssertionError가 발생한다.)