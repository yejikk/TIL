# 190501 Callback

1. **비동기 처리**란?
   * 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 JavaScript의 특성을 의미한다.

2. **Ajax (=Asynchronous JavaScript And XML**)

   * 서버와 클라이언트(사용자)간에 데이터를 이동하고 화면을 구성하는 구현 방식

   * 데이터를 이동하고 화면을 구성하는데 있어서 웹 화면을 갱신하지 않고 필요한 데이터를 서버로 보내고 가져오는 방법이다.
   * 화면 갱신(새로고침)이 없기 때문에 사용자 입장에서는 매우 편리하고 빠르게 작업을 처리하는 것처럼 느껴진다.
   * Ajax 통신에서 데이터를 전송하는 형식은 JSON, XML, CSV 형식이다.
     * JSON은 JavaScript의 객체 형태로 데이터를 전송하는 형식

3. **callback** 

   > callback 함수로 비동기 처리 방식의 문제점을 해결할 수 있다.
   >
   > 비동기적으로 콜백함수를 호출하는 함수에게 **비동기적으로 호출되기를 원하는 코드를 콜백함수에 담아서 전달해야 한다.**

   * 나중에 호출되는 함수를 말한다.
   * 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
   * **callback함수의 사용 예 : 이벤트 핸들러 처리**



## call stack

1. call stack
2. event loop
3. callback queue



## callback

1. callback + 함수 호출

```javascript
// 함수 선언
const addEach = (number, result=0) => result + number
const subEach = (number, result=0) => result - number
const mulEach = (number, result=1) => result * number

// callback 
console.log(numberEach([10, 20, 30], addEach))
console.log(numberEach([10, 20, 30], subEach))
console.log(numberEach([10, 20, 30], mulEach))
```

2. callback + 익명함수

```javascript
// callback + 익명함수
console.log(numberEach([10, 20, 30], (number, result=0) => result + number))
console.log(numberEach([10, 20, 30], function(number, result=0) {
    return result + number
}))

```