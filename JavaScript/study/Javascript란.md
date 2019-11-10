# 190430 JavaScript

> 자바와 전혀 관련이 없음

> 브라우저를 동작하는 스크립트
>
> 고정된 형식이 아닌 동적으로 브라우저를 동작시킨다.

ecma : 자바스크립트의 표준화 (나뉘어져 있는 자바스크립트를 묶어주는 것)

v8: 크롬을 돌리는 엔진

node.js :서버 사이드 플랫폼

vscode에서 javascript(es6)code snippets

​		     javascript snippet pack 설치



> 1. 변수를 선언해서 쓴다.
> 2. 밑에 선언문이 있더라도 위로 끌어올려서 undefined가 뜨도록 한다.
> 3. 요즘은 let과 const를 쓴다. (scope가 다르고, 재할당을 가능하도록)
>
> 우리는 let과 const만 사용한다.

* 변수활용 : var (재할당이 가능하다.)
  * undefined : 아직 정의되지 않았다 (값)

```javascript
// 변수 hoisting
// 자바스크립트에서 모든 선언과 관련된 (변수, 함수 등) 문장은 호이스팅 된다.
// 변수는 1) 선언단계 2) 초기화 단계(undefined) 3) 할당 단계를 거치게 된다.
console.log(name) // undefined
var name = '슬기'
/*
var name
console.log(name)
name = '슬기'
: 자바스크립트 실행 동작 (그래서 undefined가 나옴)
*/
console.log(phonenumber) // phonenumber is not defined error(Reference error)
```

* let은 재선언 불가능 (재할당은 가능) : 변수
  * var라고 선언된 것을 모두 let으로 바꾸자!

```javascript
for (let j = 0; j < 3; j++) {
        console.log(j)
    }
    console.log('=======================')
    console.log(j)
```

* const 재선언, 재할당 불가능 : 상수



* 비교연산자 : `===`



* JSON = JavaScript Object Notation

  ```javascript
  let jsonData = JSON.stringify(sungmin)
  jsonData
  "{"name":"sungmin","stuffs":["텀블러","안경"]}"
  ```

  * json.parse를 통해서 다시 만들어줘야한다.