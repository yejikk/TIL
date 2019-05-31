# 190103 | function

#### 1. 함수 기초

``` python
def fun(parameter1, parameter2):
    code line1
    code line2
    return value
```

* 함수 선언은 `def`로 시작하여 `:` 으로 끝난다.

* 함수는 `매개변수(parameter)` 를 넘겨줄 수도 있다.

* 함수는 동작 후에 `return` 을 통해 결과값을 전달 할 수도 있다. 

  (`return` 값이 없으면, None을 반환합니다.)

* 함수는 호출을 `func(val1, val2)`와 같이 한다.

#### 2. 함수의 return

함수는 반환되는 값이 있으며, 이는 어떠한 종류의 객체여도 상관없다.

함수가 return 되거나 종료되면, 함수는 호출한 곳으로 돌아간다.

* `sorted()` 와 `.sort`의 차이

  ```python
  # sorted()
  a = [3, 2, 1]
  a = sorted(a)
  print(a)
  # sorted는 정렬된 list를 return 해주도록 되어있지만, 값을 반환해주지는 않으므로 따로 값을 저장해줘야한다.
  
  # .sort()
  a = [3, 2, 1]
  a = a.sort()
  print(a)
  # .sort는 원본 자체를 바꾸고, return 값이 없기 때문에 print를 하면 None을 반환한다.
  ```

* `2.2 실습문제` : list의 합을 구할 때는 `sum`함수를 사용한다. (tuple, dict도 가능)

#### 3. 함수의 인자/인수

1) `위치 인수` : 함수는 기본적으로 인수를 위치로 판단한다.

​			(순서가 맞지 않으면 오류가 발생 할수 있음)

2) `기본 값` : 함수가 호출될 때, 인자를 지정하지 않아도 기본 값을 설정할 수 있다.

​			(defult 값을 줌으로써 오류를 방지할 수 있다.)

​			(호출 시 인자가 없으면 기본 인자 값이 활용된다.)

​			(기본 인자 값이 설정되어 있더라도 기존의 함수와 동일하게 호출 가능하다.)

3) `키워드 인자` : 키워드 인자는 직접적으로 변수의 이름으로 특정 인자를 전달할 수 있다.

```python
def greeting(age, name='ssafy'):
    print(f'{name}은 {age}살입니다.')

greeting(3)
greeting(1, 'ssafy') # 위치로 접근
greeting(age=5, name='예지') # 키워드로 접근
greeting(age=24, '철수') 
# 오류! 처음부터 키워드로 접근했기 때문에 꼭 뒤에도 키워드로 접근해야함.
```

4) `가변 인자 리스트`

: 정해지지 않은 임의의 숫자의 인자를 받기 위해서 가변인자를 활용한다

  가변인자는 `tuple` 형태로 처리가 되며, `*` 로 표현한다.

``` python
def func(*args):
```

```python
print('hi', '안녕', '헬로', '구덴탁', sep='-')
# sep : 사이에 - 을 넣어서 출력하게 한다.
```

5) `정의되지 않은 인자들 처리하기`

: 정의되지 않은 인자들은 `dict` 형태로 처리가 되며, `**`로 표현한다.

  주로 `kwagrs`라는 이름을 사용하며, `**kwargs`를 통해 인자를 받아 처리할 수 있다.

* dictionary를 인자로 넘기기

  ```python
  # 사용자 정보를 dictionary로 만들어 넘겨보세요.
  sign_up('hong', '1q2w3e4r', '1q2w3e')
  
  # 방법1
  my_account = {
      'username' : 'hong',
      'password' : '1q2w3e',
      'password_confirmation' : '1q2w3e'
  }
  sign_up(**my_account)
  
  # 방법2
  sign_up(username='hong', password='1q2w', password_confirmation='1q2w')
  ```

