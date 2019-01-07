# 190107 | data_structure

## 1. 문자열 메소드 활용하기

### 1.1 변형

####  1) `.capitalize()`, `.title()`, `.upper()`

* `.capitalize()` : 앞 글자를 대문자로 만들어 반환한다.
* `.title()` : `'` or `공백` 이후를 대문자로 만들어 반환한다.
* `.upper()` : 모두 대문자로 만들어 반환한다.

#### 2) `.lower()`, `.swapcase`

* `.lower()` : 모두 소문자로 만들어 반환한다.
* `swapcase()` : 대<->소문자로 변경하여 반환한다.

#### 3) `.join(iterable)`

* 특정한 문자열로 만들어 반환한다.

  (`iterable`) => 반복 가능한 type :  list, dict, set, str, bytes, tuple, range

* `list`를 문자열로 만들어 반환할 때, `print(' '.join(list))`라고 할 수 있는데 

  만약 `int`를 문자열로 만들어 반환할 때에는 `a = ' '.join(map(str, a)) `  를 써서 각각의 원소가 str로 변환되게 한다.

#### 4) `.replace(old, new, count)`

* 바꿀 대상 글자를 새로운 글자로 바꿔서 반환한다.
* count를 지정하면 해당 갯수만큼 앞에서부터 반환한다.

#### 5) `.strip([chars])`

* 특정한 문자들을 지정하면, 양쪽을 제거하거나, 왼쪽(`lstrip()`)을 제거하거나, 오른쪽(`rstrip()`)을 제거한다.
* 특정한 문자를 지정하지 않으면 `공백`을 제거한다.

### 1.2 탐색 및 검증

#### 1) `.find(x)`

* `x`의 첫 번째 위치를 반환한다.
* 없으면, `-1`을 반환한다. (오류를 내고 싶지 않으면 .find(x)함수를 쓰는 것이 좋다.)

#### 2) `.index(x)`

* `x`의 첫번째 위치를 반환한다.
* 없으면, 오류가 발생한다.

#### 3) `.split()`

* 문자열을 특정한 단위로 나누어 `list`로 반환한다.

  ```python
  'a_b_c'.split('_')
  -> ['a', 'b', 'c']
  
  inputs = input().split()
  print(inputs)
  print(type(inputs))
  -> 
  1 2 3
  ['1', '2', '3']
  <class 'list'>
  ```

#### 4) 다양한 확인 메소드 : 참/거짓 반환

`.isaplha(), .isdecimal(), .isdigit(), .isnumeric(), .isspace(), .issuper(), .istitle(), .islower() `

``` python
'adffd'.isalpha() # 모두다 알파벳이면 True
-> True
'123a'.isdecimal() # 모두다 숫자면 True
-> False

# 위와 같은 메소드는 True, False를 반환한다.
```

#### 5) 문자열 뒤집기

```python
'123'[::-1] # 문자열 뒤집는 방법 (외우는게 좋음!)
-> '321'

[1, 2, 3][::-1] # list 뒤집는 방법 (외우는게 좋음!)
-> [3, 2, 1]

list(reversed([1, 2, 3]))
-> [3, 2, 1]

a = [1, 2, 3]
a.reverse()
a
-> [3, 2, 1]

위 2가지 방법은 외우는 것이 좋음!!
```

## 2. 리스트 메소드 활용하기

### 2.1 값 추가 및 삭제

#### 1) `.append(x)`

: `list`에 값을 추가한다.

```python
cafe = ['a', 'b', 'c']
cafe.append('caffebene') # 원본을 변화시킴
print(cafe)
-> ['a', 'b', 'c', 'caffebene']
```

#### 2)`.extend(iterable)`

: `list`에 `iterable` (list, range, tuple, string(유의!)) 값을 붙일 수가 있다.

```python
cafe.extend(['ediya', '빽다방']) # 원본을 변화시킴
print(cafe)
-> ['a', 'b', 'c', 'caffebene', 'ediya', '빽다방']
```

* 하나의 원소를 list에 추가하고 싶으면 `append`를 쓰는 것이 좋음!

``` python
cafe.extend('ediya')
print(cafe)
-> ['a', 'b', 'c', 'caffebene', 'ediya', '빽다방', 'e', 'd', 'i', 'y', 'a']
# 이렇게 글자하나하나가 나오기 때문에 하나의 원소로 추가하고 싶으면 append() 사용하기!
```

#### 3)`insert(i, x)`

: 정해진 위치 `i` 에 `x`값을 추가한다.

```python
fruits = ['apple', 'banana']
fruits.insert(0, 'pineapple')
print(fruits)
-> ['pineapple', 'apple', 'banana']
```

#### 4) `.remove(x)`

: list에서 값이 `x`인 것을 삭제한다.

```python
['apple'] + frutis
frutis.remove('apple')
print(frutis)
-> ['banana']
```

#### 5) `.pop(i)`

* 정해진 위치 `i`에 있는 값을 삭제하며, 그 항목을 반환한다.
* `i`가 지정되지 않으면 마지막 항목을 삭제하고 되돌려준다.
* remove는 삭제, pop는 삭제된 값을 보여준다.

### 2.2 탐색 및 정렬

#### 1) `.index(x)`

: 원하는 값을 찾아 index 값을 반환한다.

```python
a= [1, 2, 3, 3, 4, 5]
a.index(1)
-> 0
```

#### 2) `.count(x)`

: 원하는 값의 갯수를 확인 할 수 있다.

```python
a = [1, 2, 3, 2, 1]
a.count(1)
-> 2
```

#### 3) `.sort()`

* 정렬을 한다.
* `sorted()`와는 다르게 원본 `list`를 변형시키고, `None`을 리턴한다.

```python
a = [1, 2, 3, 2, 1]
a.sort()
print(a)
-> [1, 1, 2, 2, 3]
```

#### 4) `.reverse()`

: 반대로 뒤집는다. (정렬은 아님)

```python
a = [1, 1, 2, 2, 3]
a.reverse()
print(a)
-> [3, 2, 2, 1, 1]
```

### 2.3 복사

#### 1) 얕은 복사

```python
# 얕은 복사 예시, 1차원적으로 카피
import copy
a = [1, 2, 3]
b = copy.copy(a) # copy.copy로 복사를 함. 원본을 바꾸지 않음
b[0] = 5
print(a)
print(b)
print(id(a))
print(id(b))
->
[1, 2, 3]
[5, 2, 3]
2873826405576
2873826402120
```

#### 2) 깊은 복사

```python
# 깊은 복사 예시, 이중 list에서 
import copy
a = [[1,2], 2, 3]
b = copy.deepcopy(a)
b[0][0] = 5
print(a) # 깊은 복사를 하면 a에는 전혀 영향이 가지 않음
print(b)
print(id(a))
print(id(b))
->
[[1, 2], 2, 3]
[[5, 2], 2, 3]
2873827202696
2873824907016
```

### 2.4 삭제

#### 1) `.clear`

: list의 모든 항목을 삭제한다.

```python
a = [1, 2, 3]
del a[1]
print(a)
-> [1, 3]
```

## 3. List Comprehension

* `list`를 만들 수 있는 간단한 방법!

```python
# list 안에서 만들 때! (set, dictionary 다 되는데 괄호 안에서 동작해야함)
even_list = [x*2 for x in range(1, 6)] # for -> x
print(even_list)
-> [2, 4, 6, 8, 10]
```

``` python
even_list = [x for x in range(1, 11) if x % 2==0] 
# for -> if 조건이 맞으면 -> x로 들어감 (필터링용도)
print(even_list)
```

* 활용법 : 여러개의 `for` 혹은 `if` 문을 중첩적으로 사용 가능하다.

```python
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']
pair = [(boy, girl) for boy in boys for girl in girls]
print(pair)
->
[('justin', 'jane'), ('justin', 'iu'), ('justin', 'mary'), ('david', 'jane'), ('david', 'iu'), ('david', 'mary'), ('kim', 'jane'), ('kim', 'iu'), ('kim', 'mary')]
```

``` python
# 주어진 조건(x<y<z<50)
my_list = [(x, y, z) for x in range(1, 50) for y in range(x+1, 50) for z in range(y+1, 50) if x**2 + y**2 == z**2]
print(my_list)
->
[(3, 4, 5), (5, 12, 13), (6, 8, 10), (7, 24, 25), (8, 15, 17), (9, 12, 15), (9, 40, 41), (10, 24, 26), (12, 16, 20), (12, 35, 37), (15, 20, 25), (15, 36, 39), (16, 30, 34), (18, 24, 30), (20, 21, 29), (21, 28, 35), (24, 32, 40), (27, 36, 45)]

```

```python
# 모음 제거하기
words = 'Life is too short, you need python!'
vowel = 'aeiou'
result = [x for x in words if x not in vowel]
# result = ''.join(map(str, result))
# print(result)

print(''.join(result))
-> Lf s t shrt, y nd pythn!
```