/*
function a() {
    console.log('A');
}
*/

// 함수의 이름이 붙여져 있지 않은 함수를 '익명함수'라고 한다.
// 익명함수를 호출하기 위해 변수에 담아준다.
// a라는 변수의 '값'으로서 함수를 정의하고 있다. 자바스크립트에서는 함수가 값이라는 것을 의미한다.
// 
var a = function() {
  console.log('A');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);