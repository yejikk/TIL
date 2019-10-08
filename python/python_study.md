# python_study



## 1. 순열 / 조합

```python
import itertools

chars = ['A', 'B', 'C']

p = itertools.permutations(chars, 2)  # 순열
c = itertools.combinations(chars, 2)  # 조합

print(list(p))
print(list(c))
```



## 2. 이진수 변환

```python
if __name__ == "__main__" : 
  num = 12345 
  print bin(num) 
  # 10진수 -> 2진수 변환 : 0b11000000111001 
  print oct(num) 
  # 10진수 -> 8진수 변환 : 030071 
  print hex(num) 
  # 10진수 -> 16진수 변환 : 0x3039 
  print int(bin(num),2) 
  # 2진수 -> 10진수 변환 : 12345 
  print int(hex(num),16) 
  # 16진수 -> 10진수 변환 : 12345
```



## 3. rjust, ljust

> **오른쪽 정렬은 rjust 라는 함수를 사용**하고, **왼쪽 정렬은 ljust 라는 함수를 사용**

```python
a = "123"
print a.rjust(10, '#')

결과 = '#######123'
```



## 4. 딕셔너리 정렬

1. Key 값 정렬

   ```python
   dict = {'A' :1,'D' :4,'C' :3,'B' :2}
   sdict= sorted(dict.items())
   # items() 함수는 key-value 쌍이 tuple로 구성된 리스트가 리턴됩니다.
   ```

2. Value 값 정렬

   ```python
   import operator
    
   dict = {'A' :1,'D' :4,'C' :3,'B' :2}
   sdict= sorted(dict.items(), key=operator.itemgetter(0))
   ```

3. 딕셔너리 기준 값 정렬

   ```python
   sorted(result, key=lambda x : result[x], reverse=True)
   ```

   