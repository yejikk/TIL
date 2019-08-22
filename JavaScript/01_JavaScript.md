# 190430 JavaScript

#### 1. 자바스크립트란?

> 객체 기반의 스크립트 프로그래밍 언어이다.
>
> 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.
>
> HTML과 CSS로 만들어진 웹페이지를 동적으로 변경해주는 언어이다.



#### 2. 자바스크립트의 특징

> 1. 객체 기반의 언어이다. (하지만 상속과 클래스 개념은 없음.)
>
> 2. 인터프리터 언어로서 클라이언트의 웹 브라우저에 의해 해석되고 실행된다.
>
> 3. HTML 문서 내에 기술되고, HTML 문서와 함께 수행된다. 
>
>    ```html
>    <script>
>    // 이 곳에 자바스크립트를 작성한다.
>    </script>
>    ```
>
> 4. HTML에 연산 제어 등 프로그래밍적인 요소를 추가하고, 클라이언트의 자원을 활용할 수 있도록 한다.



#### 3. 자바스크립트의 역할

> 자바스크립트의 일반적인 용도는 웹 페이지에 기능을 더해 HTML 웹 페이지를 동적으로 만드는 것이다.
>
> 1. HTML 페이지 변경 및 HTML element와 content의 추가 혹은 제거
> 2. CSS및 HTML element의 스타일 변경
> 3. 사용자와의 상호작용, 폼의 유효성 검증
> 4. 마우스와 키보드 이벤트에 대한 스크립트 실행
> 5. 웹 브라우저 제어, 쿠키 등의 설정과 조회
> 6. AJAX 기술을 이용한 웹 서버와의 통신
> 7. 웹사이트의 기능적인 면(쿠키처리, 새로운 Window 열기 등)



## 01. Variable

1. **alert** (ex.경고창)

   ```javascript
   alert('자바스크립트, 안녕!')
   ```



2. **console.log(object)**

   * brower 상에는 나오지 않지만, console 창에는 나온다.

   ```javascript
   console.log('안녕')
   console.log('잘가')
   ```



3. **document**

   ```javascript
   document.write('<h1>SSAFY 최고</h1>')
   ```

   ![](C:\Users\kig95\Desktop\SSAFY\JavaScript\image\document.JPG)

   * document.**querySelector()**
     * .querySelector()는 CSS 선택자로 요소를 선택하고, 해당하는 요소의 첫번째 요소만을 반환한다.
   * .innerText
     * 노드(node)와 그 자손의 '렌더링된' 텍스트 내용을 나타내는 속성(property) 입니다



4. **var**

   * **var는 재선언, 재할당 모두 가능**하다.

   ```javascript
   var a = 3
   console.log(a)
   // 3
   var a = 5
   console.log(a)
   //5
   
   // 재선언, 재할당 모두 가능하기 때문에 위 코드는 에러가 발생하지 않는다.
   ```

   * Scope가 for문안에서만 해당하는 것이 아닌 밖에서도 해당한다. (전역 변수)

   ```javascript
   for (var i = 0; i < 3; i++) {
       console.log(i)
   }
   console.log('=======================')
   console.log(i) // i값은 3
   ```


5. **let**

   * **let은 재선언은 불가능**하지만, 값의 재할당은 가능하다.
   * 변수로 선언되는 키워드이다.

   ```javascript
   let b = 5
   let b = 3
   // b의 재선언은 불가능하기 때문에 에러가 발생한다.
   ```

   * Scope가 for문 안에서만 해당한다. (지역 변수)

   ```javascript
   for (let j = 0; j < 3; j++) {
       console.log(j)
   }
   console.log('=======================')
   console.log(j) // j값은 없어서 오류 발생
   ```



6. **const**
   * **const는 재선언, 재할당 모두 불가능**하다. 
   * 상수로 선언되는 키워드이다.
   * **함수이름을 선언할 때는 const**를 사용한다. (다시 바뀔 일이 없기 때문에.)



7. **template 문자열**

   ```javascript
   const firstName = 'happy'
   const lastName = 'hacking'
   const name = firstName + lastName
   
   // 1. 문자열 표현
   document.write('<h1>' + name + '</h1>')
   
   // 2. 문자열 표현, ES6+(template literal)
   document.write(`<h1>${name}</h1>`)
   ```


## 02. if (조건문)

```javascript
let userName = prompt('너 누구야?') // prompt는 입력창을 생성한다.
let message

if (userName === '예지') {
    message = `<h1>예지안녕</h1>`
} else {
    message = `<h1>${userName}도 안녕</h1>`
}
```

* `()` 안에 조건을 쓰고 `{}`을 통해 실행될 코드를 작성한다.
* `===` : 일치함을 비교할 때(값, 타입) 사용한다. <-> `!==`
* `==` : 동등함을 비교할 때(값) 사용한다. <-> `!=`



## 03. list(배열)

```javascript
let numbers = [1, 2, 3, 4]

numbers.length

numbers.reverse() // 리스트 뒤집기, 원본이 바뀜

numbers.sort() // 리스트 정렬, 원본이 바뀜

numbers.push('push') // 뒤에 넣기
numbers.unshift('1') // 앞에 넣기

numbers.pop() // 뒤에 빼기, 괄호 안에 무엇을 넣어도 마지막 것이 pop이 됨
numbers.shift() // 앞에 빼기

numbers.includes(1) // true, false (포함되어있는지)

numbers.slice(0, 3) // 0번부터 2번
numbers.slice(-2) // 뒤에서부터 2개
```



## 04. loof

* **while**

  ```javascript
  let i = 0;
  while (i < 10) {
      console.log(i)
      i++
  }
  ```

  * `()`안에 `while`반복문의 조건을 작성한다.
  * `{}`안에 실행될 코드를 작성한다.



* **for**

  * **for (초기값; 조건; 다음값;)**

  ```javascript
  for (let j=0; j < 10; j++) {
      console.log(j)
  }
  ```

  * 배열의 반복문 - **for of**

  ```javascript
  let myArray = [1, 2, 3]
  for (let k of myArray) {
      console.log(k)
  }
  ```


## 05. Object

* 자바스크립트 데이터 타입 - 원시타입(primitive type)
* Boolean(true, false), null, undefined, number, string

1. 자바스크립트 **object 표기법**

   * 객체 자체를 만들어서 표기한다.

   ```javascript
   let student = {
       name: 'seulgi',
       age: 26, 
       number: '010-1111-1111'
   }
   console.log(student.name) // 'seulgi'
   console.log(student.age) // 26
   console.log(typeof student) // object
   console.log(typeof [1, 2, 3]) // object
   ```

   * ES6+ 표기법

   ```javascript
   let name = 'yeji'
   let stuffs = ['텀블러', '안경']
   let sungmin = {
       name,
       stuffs
   }
   ```

2. **json <-> object**

   ```javascript
   let jsonData = JSON.stringify(sungmin) // json data가 string형식으로
   let jsonParse = JSON.parse(jsonData) // object로 바뀜(dictionary 형태, 우리가 사용)
   ```


## 06. fuction (함수)

1. **함수 선언식**

   ```javascript
   function add(num1, num2) {
       return num1 + num2
   }
   
   console.log(add(1, 2))
   ```



2. **함수 표현식 - 익명 함수**

   ```javascript
   const add2 = function (num1, num2) {
       return num1 + num2
   }
   
   console.log(add2(1, 3))
   ```



3. **ES6+ Arrow Function**

   * 화살표가 들어가는 표기법
   * 앞으로 쓸 방법

   ```javascript
   const sub = (num1, num2) => {
       return num1 - num2
   }
   ```

   ```javascript
   // 인자가 하나인 경우, () 생략가능
   // 단순 리턴인 경우, {} 및 리턴 키워드 생략 가능
   let greeting = name => `${name}, 안녕!`
   console.log(greeting('성민'))
   let mul = (num1, num2) => num1 * num2
   console.log(mul(1, 4))
   
   // 인자가 없는 경우에는 () 생성
   let hello = () => 'hello, world!'
   console.log(hello())
   
   // object 리턴 시
   let me = (name, age) => ({name, age}) 
   console.log(me('hi', 32))
   ```

4. **익명 함수**

   ```javascript
   (function(number) {return number*number})
   ```



5. **즉시 실행 함수 (익명함수 + 호출)**

   ```javascript
   (function(number) {return number*number})(5)
   (number => number*number)(5)
   ```


