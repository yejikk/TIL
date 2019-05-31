# 190110 ~ 190111 | OOP

```markdown
OOP (객체 지향 프로그래밍) : 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나여러 개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 것이다.

- 클래스(Class)
  : 같은 종류의 집단에 속하는 속성(attribute)과 행위(behavior)를 정의한 것
  
- 인스턴스(instance)
  : 클래스의 인스턴스(복사본)으로 자신 고유의 속성을 가지며 클래스에서 정의한 행위를 수행할 수 	있다.

- 메서드(Method)
 : 클래스로부터 생성된 객체를 사용하는 방법으로서 객체에 명령을 내리는 것
   (메서드는 한 객체의 속성을 조작하는 데 사용된다.)
```

## 1. 클래스 및 인스턴스

#### 1) 클래스 객체

```python
class ClassName:
```

* 선언과 동시에 클래스 객체가 생성됨.
* 선언된 공간은 지역 스코프로 사용된다. (Local scope)
* 정의된 어트리뷰트 (속성) 중 변수는 멤버 변수로 불린다.
* 정의된 함수(`def`)는 메서드로 불린다.
* 클래스 이름은 앞글자를 대문자로 작성한다.
* 선언시 self를 반드시 작성해야한다. (self에 인스턴스를 집어넣어야 하기 때문에)

```python
class Person:
    name = '김예지'
    def greeting(self):
        print(f'hello, {self.name}')
```

#### 2) 인스턴스 객체

* 인스턴스 객체는 `ClassName()`을 호출함으로써 선언된다.
* 인스턴스 객체와 클래스 객체는 서로 다른 이름 공간을 가지고 있다.
* 인스턴스  -> 클래스 -> 전역 순으로 탐색한다!!

```python
yeji = Person()
# 인스턴스 객체가 생성된다.

yeji.greeting()
-> hello, 김예지

yeji.name = '예지'
yeji.greeting()
-> hello, 예지
```

```python
isinstance(yeji, Person)
-> True
# yeji와 Person이 같은 type인 class인지 확인.
```

* python 출력의 비밀 : repr, str

  ```python
  class Person:
      name = '홍길동'
      
      def greeting(self):
          print(f'hello, {self.name}')
      
      # str : 사용자들을 위한 것. print()를 써야 호출이 됨
      def __str__(self):
          return f'사람 : {self.name}'
      
      # repr : idle, jupyter notebook, python => REPL 환경에서
      def __repr__(self):
          return f'사람 : {self.name}'
      
      # str이 없으면, repr 호출
      # repr 없으면, str 호출하지 않음
  ```

