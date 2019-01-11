# 190110 ~ 190111 | class

### class 용어정리

```python
class Person:                      #=> 클래스 정의(선언) : 클래스 객체 생성
    name = '홍길동'                  #=> 멤버 변수(데이터 어트리뷰트)
    def greeting(self):            #=> 멤버 메서드(메서드)
        print(f'{self.name}')
```


```python
p1 = Person()       # 인스턴스 객체 생성
p2 = Person()   # 인스턴스 객체 생성
p1.name             # 데이터 어트리뷰트 호출
p1.greeting()       # 메서드 호출
```

### `self` : 인스턴스 객체 자기자신

* 메서드는 인스턴스 객체가 함수의 첫번째 인자로 전달되도록 되어있다.
* 특별한 상황을 제외하고는 무조건 메서드에서 `self` 를 첫번째 인자로 설정한다.

```python
p1.greeting() # 메서드 호출
Person.greeting(p1) # 메서드 호출할 때, python에서 진짜로 실행되고 있는 코드

# () 안에 있는 인자가 self로 넘어가기 때문에 꼭 self를 써줘야함!
```

* 함수 안에 self를 넣지 않으면 인스턴스의 함수 호출이 불가능하다. (TypeError 발생)

* 클래스 선언부 내부에서도 반드시 `self`를 통해 데이터 어트리뷰트에 접근해야 한다.

  ```python
  class Person:
      name = '홍길동'
      def greeting(self):
          print(f'안녕하세요? {self.name}')
  # self.name으로 데이터 어트리뷰트에 접근해야 한다.
  ```

### 클래스-인스턴스간의 이름공간

* `클래스`를 정의하면, `클래스 객체`가 생성되고 해당되는 이름 공간이 생성된다.
* `인스턴스`를 만들게 되면, `인스턴스 객체`가 생성되고 해당되는 이름 공간이 생성된다.
* 인스턴스의 `어트리뷰트`가 변경되면,  변경된 데이터를 `인스턴스 객체` 이름 공간에 저장한다.
* 즉, `인스턴스`에서 특정한 `어트리뷰트`에 접근하게 되면 `인스턴스 -> 클래스` 순으로 탐색을 한다.

### 생성자 / 소멸자

* `생성자`는 인스턴스 객체가 생설될 때 호출되는 함수이다.

  * 생성자는 값을 초기화하는 과정에서 자주 활용된다.

  ```python
  def __init__(self):
      print('생성될 때 자동으로 호출되는 메서드입니다.')
  ```

  ```python
  # 아래와 같이 모두 사용할 수 있다.
  def __init__(self, parameter1, parameter2):
      print('생성될 때 자동으로 호출되는 메서드입니다.')
      print(parameter1)
  
  def __init__(self, *args):
      print('생성될 때 자동으로 호출되는 메서드입니다.')
  
  def __init__(self, **kwagrs):
      print('생성될 때 자동으로 호출되는 메서드입니다.')
  ```

* 소멸자`는 인스턴스 객체가 소멸되는 과정에서 호출되는 함수이다.

  ```python
  def __del__(self):
      print('소멸될 때 자동으로 호출되는 메서드입니다.')
  ```

### 클래스 변수 / 인스턴스 변수

```python
class Person:
    population = 0              # 클래스 변수 : 모든 인스턴스가 공유함.
    
    def __init__(self, name):   
        self.name = name        # 인스턴스 변수 : 인스턴스별로 각각 가지는 변수
        						#				(사용자에게 값을 받겠다는 의미!)
```

### 1. 정적 메서드 : 객체가 전달되지 않은 형태

```python
# 정적 메서드 정의
@staticmethod
def methodname():
    codeblock
```

```python
class Dog:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    @staticmethod # 정적메소드를 쓰기 위해서 써야함!
    def bark():
        print('멍멍')
```

* `@staticmethod` 를 써서 정적메서드를 사용한다는 것을 알린다.
* Dog.bark()를 실행시키면 '멍멍'이 출력된다. 
* 인자로 돌려줄 인스턴스가 필요없다.

### 2. 인스턴스 메서드

``` python
def greeting(self): 
    # 인스턴스 메소드 p1.greeting() == Person.greeting(p1) 
    self.name
```

1) p1.greeting() == Person.greeting(p1) 

2) 첫번째 인자로 p1 object가 넘어간다. (인자로 인스턴스를 사용함!!)

3) self.name 형식으로 메소드 내부에서 인스턴스 변수를 가져올 수 있다.

** 인스턴스 메서드는 인스턴스를 인자로 넘겨서 인스턴스 안에서 활동한다!

### 3. 클래스 메서드

```python
# 클래스 메서드 정의
@classmethod
def methodname(cls):
    codeblock
```

```python
class Dog:
    cnt = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.cnt = 10000
        Dog.cnt += 1

    @classmethod
    def count(cls):
        print(f'{cls.cnt}')
```

```python
cream = Dog('크림이', 2)
bosin = Dog('보신이', 5)
comong = Dog('코몽이', 7)
# 3마리를 모두 실행시킨 후

Dog.count() # => cls.cnt == Dog.cnt
-> 3
# cls에 class가 들어가서(인자로 class가 들어감) Dog.cnt += 1 이 세 번 계산되어 3출력
# class 변수를 사용함!!

cream.count()
-> 3
# @classmethod이기 때문에 인자로 class가 들어가서 class 변수를 이용하여 3이 출력
```

```python
class Dog:
    cnt = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.cnt = 10000
        Dog.cnt += 1
    
    # 인스턴스 메서드 doggy.bark() == Dog.bark(doggy)   
    def bark(self):
        print(f'(멍멍), {self.name}') 
    
    # 클래스 메서드 Dog.count(), 클래스 자체를 인자로 넘겨줌
    @classmethod
    def count(cls): # class에서는 ()안에 cls : 클래스를 뜻하는 것
        print(f'{cls.cnt}')
```

* `classmethod(클래스 메서드)` 를 사용하는 이유는 `class`안의 변수들을 사용하기 위해서!

  (인스턴스 메서드는 인스턴스 안의 변수들만 사용한다. class 안의 변수들에 접근하지 않도록 한다!)

  (스코핑룰 LGB를 꼭 기억하자!)

### 상속 클래스 : 클래스를 상속 받아 클래스 안에있는 함수, 변수 모두 사용가능함!

