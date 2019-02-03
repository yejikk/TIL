## 190130 알고리즘 string

* #### 문자열 뒤집기

  * 자기 문자열에서 뒤집는 방법이 있고, 새로운 빈 문자열을 만들어 소스의 뒤에서부터 읽어서 타겟에 쓰는 방법이 있다.
  * 자기 문자열을 이용할 경우는 **swap을 위한** **임시 변수**가 필요하며, **반복 수행을 문자열 길이의 반**만을 수행해야 한다. 
    * 문자열 길이가 9라면 9 // 2 = 4회 반복
  * python에서는 slice notation을 이용해서 구현하면 된다. [::-1] 사용

  ```python
  # python에서 slice notation을 이용하지 않고 문자열을 뒤집는 코드
  
  word = 'abced'
  for i in range(len(word)//2): # 반복문을 문자열의 반만 수행한다.
      x = word[i] # swap을 위한 임시 변수를 사용한다.
      word[i] = word[len(word)-1-i]
      word[len(word)-1-i] = word[i]
      # 값을 바꾼다. 
      # 이 과정을 통해 문자열 뒤집기를 할 수 있다.
  ```



* #### 문자열 비교

  * python에서는 **== 연산자**와 **is 연산자**를 제공한다.
    * **== 연산자** : 비교 연산자 / value comparison(값 비교)를 하는 연산자
    * **is 연산자** : identity 연산자 / reference comparison(참조 비교)를 하는 연산자
  * python은 자주 쓰이는 값이 미리 정의되어 있어서 이러한 데이터들을 이용하려 할 때 새로운 데이터 공간이 할당되는 게 아니라 미리 할당 되어 있는 '자주 쓰이는 데이터가 저장된 공간'의 포인터를 매칭시키게 된다. 그렇기 때문에 '자주 쓰이는 데이터'가 아니라면 `is`로 비교하는 것은 무의미하다. (즉, `is`는 reference를 비교하는 연산자로, 데이터 값을 비교하는 연산자는 아니다.)

  ```python
  # 문자열 비교 == (eq)를 쓰지 않고 문자열을 비교하는 코드 (하나하나씩 비교함)
  
  def strcmp(str1, str2):
      i = 0 # index를 위한 변수
      # str1과 str2의 길이가 다르면 이미 다른 문자열이기 때문에 False return
      if len(str1) != len(str2):
          return False
      # str1과 str2의 길이가 같다면 하나씩 비교하여 같은 문자열인지 확인함.
      else:
          while i < len(str1):
              if str1[i] != str2[i]:
                  return False
              	break
              i += 1
      # len(str1)까지 다 실행되어 같은 문자열임을 확인하면 True를 return
      return True
  ```



* #### 문자열 숫자를 정수로 변환하기

  * python에서는 숫자와 문자변환 함수를 제공한다.
    * int('123'), float('3.14'), str(123), repr(123)
  * **ord 내장함수는 문자의 아스키 코드값을 리턴하는 함수** (아스키 코드는 int)

  ```python
  # 위와 같은 방법을 사용하지 못할 때, 문자열 숫자를 정수로 변환하기
  
  def atoi(string):
      value = 0
      i = 0
      
      while i < len(string):
          c = string[i]
          if c >= '0' and c <= '9': # 문자열도 대소 비교가 가능하다.
              digit = ord(c) - ord('0')
         	else:
              break
          value = (value * 10) + digit
          i += 1
      return value
  ```



* #### 정수를 문자열 숫자로 변환하기

  * **chr 내장함수는 아스키 코드값**을 입력으로 받아 그 코드에 해당하는 **문자를 출력하는 함수**이다.

  ```python
  def itoa(num):
      result = []
      while num != 0:
          r = num % 10
          result.append(chr(r + ord('0')))
          num // = 10
          
      result.reverse()
      result = ''.join(result)
      return result
  ```



* 파싱이란?
  * 짜를 수 없을 때까지 짜르는 것
  * 토큰?
  * split()와 비슷하다
  * 짤라서 필요한 것 뽑아쓰기



* #### 패턴매칭

  ##### 1) 고지식한 패턴 검색 알고리즘 = BruteForce (현재 사용할 방법)

  * 본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일히 비교하는 방식으로 동작
  * 시간 복잡도
    * 최악의 경우 시간 복잡도는 text의 모든 위치에서 패턴을 비교해야 하므로 **O(MN)**이 된다.
    * 시간복잡도가 O(MN)이므로 text수가 들어나면 비교횟수가 커지기 때문에 비효율적임

  ```python
  def bruteForce(text, pattern):
      for i in range(len(text)-len(pattern)+1):
          cnt = 0
          for j in range(len(pattern)):
              if text[i+j] != pattern[j]:
                  break
              else: 
                  cnt += 1
              if cnt >= len(pattern) :
                  return i
      return -1
  ```

  * #### KMP 알고리즘 (이러한 방법이 있다고 알고만 있기)

    * 불일치가 발생한 text  스트링의 앞 부분에 어떤 문자가 있는지를 밀 알고 있으므로, 불일치가 발생한 앞 부분에 대하여 다시 비교하지 않고 매칭을 수행한다.
    * 패턴을 전처리하여 배열 **next[M]**을  구해서 잘못된 시작을 최소화함
      * **next[M]** : 불일치가 발생했을 경우 이동할 다음 위치
    * **시간 복잡도 : O(M+N)**



  * #### 보이어-무어 알고리즘

    * 비교를 거꾸로 (**오른쪽에서 왼쪽**으로 비교)
    * 대부분의 상용 소프트웨어에서 채택하고 있는 알고리즘
    * 보이어-무어 알고리즘은 패턴에 오른쪽 끝에 있는 문자가 불일치 하고 이 문자가 패ㄴ턴내에 존재하지 않는 경우, 이동 거리는 무려 패턴의 길이 만큼이 된다.
    * 거꾸로 비교해서 안맞으면 어짜피 필요없는 곳이므로 그 만큼 skip한다.
    * 발상의 전환



* #### 문자열 매칭 알고리즘 비교

  * 찾고자 하는 문자열 패턴의 길이 m, 총 문자열 길이 n
  * 고지식한 패턴 검색 알고리즘 : 수행시간 O(mn)
  * 카프-라빈 알고리즘 : 수행시간 O(n)
  * KMP 알고리즘 : 수행시간 O(n)
  * 보이어-무어 알고리즘
    * 앞의 두 매칭 알고리즘들의 공통점은 텍스트 문자열의 문자를 적어도 한번씩 훑는다는 것이다.
    * 보이어-무어 알고리즘은 텍스트 문자를 다 보지 않아도 된다.
    * 발상의 전환 : 패턴의 오른쪽부터 비교한다.
    * 입력에 따라 다르지만 일반적으로 O(n)보다 시간이 덜 든다.