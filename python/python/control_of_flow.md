# 190102 | control_of_flow

## 1. 조건문(if, else, elif)

#### 1) 조건문 문법

* `if`문은 반드시 일정한 참/거짓을 판단할 수 있는 `조건식`과 함께 사용이 되어야한다.
* `<조건식>` 이 참인 경우 `:` 이후의 문장을 수행한다.
* `<조건식>` 이 거짓인 경우 `else:` 이후의 문장을 수행한다.

#### 2) 복수 조건문

* 2개 이상의 조건문을 활용할 경우 `elif <조건식>`을 활용한다.

#### 3) 조건 표현식

* true_value if <조건식> else false_value

  (`if`문으로 변환할 수 있어야함)

## 2. 반복문(while, for in)

#### 1) `while` 문

: `while` 문은 조건식이 참(True)인 경우 반복적으로 코드를 실행한다.

  `while`문은 종료조건을 반드시 설정해주어야 함 (그렇지 않으면 무한대로 실행됨)

  `break`사용을 하면 반복문 탈출 가능!

#### 2) `for` 문

: `for`문은 정해진 범위 내에서 순차적으로 코드를 실행한다.

  (`for` i `in` sequence )

* `enumerate()`는 파이썬 표준 라이브러리 내장함수 중 하나이며,

  `enumerate(iteralble, start=0)`

  으로 start는 index 시작 값을 의미한다.

#### 3) break, continue, else

(1) `break` : 반복문을 종료하는 표현 (반복문 탈출)

(2) `continue` : continue 이후의 코드를 수행하지 않고 반복문으로 돌아감.

(3) `else` : else 문은 끝까지 반복문을 시행한 이후에 실행됨.