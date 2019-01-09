# 190108 | data_structure

## 1. 문자열 메소드 활용하기

#### 1) 변형

* `.capitalize()` : 앞글자를 대문자로 만들어 반환한다.
* `.title()` : ' or 공백 이후 문자를 대문자로 만들어 반환한다.
* `.upper()` : 모든 문자를 대문자로 만들어 반환한다.
* `.lower()` : 모든 문자를 대문자로 만들어 반환한다.
* `.swapcase()` : 대 <-> 소문자로 변경하여 반환한다.
* `.join(iterable)` : 특정한 문자열로 만들어 반환한다 (중요!!)

```python
# list(iterable)를 문자열로 반환
' '.join(['hi', 'everyone'])
-> 'hi everyone'

# map을 사용하여 각각의 원소가 str로 변환됨을 의미함
a = [1, 2, 3]
' '.join(map(str, a))

# join은 아주 중요! 꼭 알아두기!
```

* `.replace(old, new, count)` : 바꿀 대상 글자(old)를 새로운 글자(new)로 바꿔서 반환한다.(중요!)

  * count를 지정하면 해당 갯수만큼만 시행한다(앞에서부터! 써도 되고 안써도 됨.)

  * 영어+숫자로 된 문장에서 유용하게 사용가능 

    (ex) 숫자로만 만들고 싶으면 영어를 공백으로 바꿔준다.(문제 풀이 참고)

  ```python
  'wow!'.replace('o', '_')
  -> 'w_w!'
  'wooooooow'.replace('o', '_', 2)
  -> 'w__ooooow'
  ```

* `.strip([chars])` : 특정한 문자들을 지정하면, 양쪽을 제거하거나 왼쪽을 제거하거나 오른쪽을 제거한다. 지정하지 않으면 공백을 제거한다.

#### 2) 탐색 및 검증

* `.find(x)` : x의 첫 번째 위치를 반환한다. (없는 경우, -1을 반환하여 오류를 방지한다.)
* `.index(x)` : x의 첫 번째 위치를 반환한다. (없는 경우, 오류가 생긴다.)

#### 3) 다양한 확인 메소드 : 참/거짓 반환

* `.isalpha()` : 문자열이 알파벳, 한글이면 True 반환.
* `.isdecimal()` : 문자열이 숫자면 True 반환.
* `.isdigit()` : 음수나 소숫점이 포함되면 False를 반환.
* `.isupper()` : 문자열이 대문자이면 True를 반환.
* `.islower()` : 문자열이 소문자이면 True를 반환.
* `.isspace()` : 문자열에 공백이 있으면 True를 반환.
* `.title()` : 문자열에서 앞글자가 대문자이면 True를 반환.

#### 4) split() (중요!!!!!)

: 문자열을 특정한 단위로 나누어 `list`로 반환한다. 

```python
# _을 기준으로 문자열을 나누어 list로 반환함.
'a_b_c'.split('_')
-> ['a', 'b', 'c']

# map과 함께 사용!
# 공백을 기준으로 문자열을 나누고 int형으로 형변환을 한다.
inputs = list(map(int, input().split()))
print(inputs)
-> 5 3 1 2 3 5 1 # inputs
[5, 3, 1, 2, 3, 5, 1] # 출력값
```

#### 5) 문자열 뒤집기 (중요!!!!!)

```python
# 첫번째 방법
# [::-1]을 써서 문자열을 뒤집음! 꼭 기억하기!
# 이 방법을 쓰면 range(a, -1, -1)이러한 방법을 간단하게 줄일 수 있음
'123'[::-1] -> '321'

# 두번째 방법
# 문자열을 반환해주는 join을 쓰고, 이를 뒤집는다.
''.join(reversed('123'))
```

## 2. list 메소드 활용하기

#### 1) 값 추가 및 삭제

* `.append(x)` : list에 값을 추가한다.

```python
cafe = ['a', 'b', 'c']
cafe.append('caffebene')
-> ['a', 'b', 'c', 'caffebene']
```

* `.extend(iterable)` : list에 iterable(list, range, tuple, string(유의))의 값을 붙일 수 있다.

  * 만약 list 안에 넣지 않고, str 형으로 넣는다면 하나씩 list에 들어감!
  * 그래서 하나의 원소를 list에 추가하고 싶다면 append를 쓰는 것이 더 효율적이다.

  ```python
  cafe.extend('ediya')
  -> ['a', 'b', 'c', 'caffebene', 'ediya', '빽다방', 'e', 'd', 'i', 'y', 'a']
  
  # list안에 넣고 하나씩 넣기!
  # append의 경우 ['a', 'b']라고 추가됨
  cafe.extend(['a', 'b'])
  -> ['a', 'b', 'c', 'e', 'd', 'i', 'y', 'a', 'a', 'b']
  ```

* `.insert(i, x)` : 정해진 위치 i에 값을 추가한다.
* `.remove(x)` : list에서 값이 x인 것을 삭제한다.
* `.pop(i)` : 정해진 위치 `i`에 있는 값을 삭제하며, 그 항목을 반환한다.

  * 만약, `i`가 지정되지 않으면 마지막 항목을 삭제하고 반환한다.

#### 2) 탐색 및 정렬

* `.index(x)` : 원하는 값을 찾아 index 값을 반환한다.

* `.count(x)` : 원하는 값의 갯수를 반환한다.

  ```python
  a = [1, 2, 3, 2, 1]
  a.count(1)
  -> 2
  ```

* `.sort()` : 정렬을 한다.

  * sorted()와는 다르게 원본 list를 변형시키고, None을 리턴한다.

  ```python
  a = [1, 2, 3, 2, 1]
  a.sort()
  -> [1, 1, 2, 2, 3]
  ```

* `.reverse()` : 반대로 뒤집는다. (정렬해주는 것은 아님)

```python
a = [1, 1, 2, 2, 3]
a.sort(reverse=True)
-> [3, 2, 2, 1, 1]
```

```python
a = [2, 3, 5]
list(reversed(a)) 
-> [5, 3, 2]
```

## 3. 딕셔너리(dictionary) 메소드 활용

#### 1) 추가 및 삭제

* `.pop(key, default)` 

  : key가 딕셔너리에 있으면 제거하고, 그 값(value)을 반환한다.

   그렇지 않으면 default 값을 반환한다.

   만약, default가 없는 상태에서 key가딕셔너리에 없으면 KeyError가 발생한다.

  ```python
  my_dict = {'apple' : '사과', 'banana' : '바나나'}
  my_dict.pop('apple')
  -> '사과'
  ```

* `.update()` : 값을 제공하는 key, value로 덮어쓴다.

  ```python
  my_dict = {'banana' : '바나나'}
  # update 방법 1
  my_dict.update(melon = '멜론')
  print(my_dict)
  -> {'banana': '바나나', 'melon': '멜론'}
  
  # update 방법 2
  my_dict.update({'pineapple' : '파인애플'})
  print(my_dict)
  ->{'banana': '바나나', 'melon': '멜론', 'pineapple': '파인애플'}
  ```

* `.get(key, default)` : key를 통해 value를 가져온다.

  * 절대 KeyError가 발생하지 않는다. (default 값이 기본적으로 None)

## 4. set 메소드 활용

#### 1) 추가 및 삭제

* `.add(elem)` : elem에 set를 추가한다.
* `.update(*others)` : 여러가지의 값을 순차적으로 추가한다. (반드시 iterable 형식을 넣어야한다.)

* `.remove(elem)` : elem을 set에서 삭제하고, 없으면 KeyError가 발생한다.
* `.discard(elem)` : x를 set에서 삭제하고, 없어도 에러가 발생하지 않는다.
* `.pop()` : 임의의 원소를 제거해 반환한다.

## 5. 기타 정리!

#### 1) map(function, iterable)

- iterable의 모든 원소에 function을 적용한 후 그 결과를 돌려준다.
- iterable type : list, dict, tuple, str, set, range, bytes
- return은 map_object 형태!

```python
# map을 활용하여 list안에 int형 요소를 str로 바꾸고 이를 join을 사용하여 문자열로 만듬!!
# .join은 특정한 문자열로 바꿔주는 메소드!
a = [1, 2, 3]
a = ''.join(map(str, a))
print(a)

# map을 활용하여 str -> int 형식으로 list 출력.
a = ['1', '2', '3']
result = list(map(int, a))
print(result)
-> [1, 2, 3]
```

#### 2) zip(*iterable)

- 복수 iterable한 것들을 모아준다.
- 결과는 tuple 모음으로 구성된 zip object를 반환한다.

```python
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']
list(zip(girls, boys))
-> [('jane', 'justin'), ('iu', 'david'), ('mary', 'kim')]
```

#### 3) filter(function, iterable)

: iterable에서 function의 반환된 결과가 참인 것들만 구성하여 반환한다.