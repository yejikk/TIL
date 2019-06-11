# 09. Node.js - 동기, 비동기, Callback

> Node.js에서 매우 중요한 특징인 비동기 처리 방식을 살펴본다.
>
> Node.js 실행순서를 파악하는 것이 중요하다.



## 동기, 비동기의 차이

* **fs.readFileSync(path[, options])**

  * 동기적인 방식
  * readFileSync는 **return 값**을 주기 때문에 result변수에 저장할 수 있다.

  ```javascript
  // fs 모듈 불러오기
  var fs = require('fs');
  
  // readFileSync - 동기적인 방식
  console.log('A');
  var result = fs.readFileSync('syntax/sample.txt', 'utf8');
  console.log(result);
  console.log('C');
  ```

  ```bash
  $ node syntax/sync.js
  A
  B
  C
  ```



* **fs.readFile(path[, options], callback)**

  * 비동기적인 방식
  * Nodejs는 비동기적인 방법을 선호하고 있다.
  * **callback**함수가 들어가있다.
  * readFile은 return값이 아니다. (변수에 저장하지 않음)
    * 함수를 3번째 인자로 넘겨줘야한다.
    * function(callback)으로 값을 준다. (이 함수를 실행시킨다.)
    * Nodejs가 이 함수를 실행시켜서 err를 확인하고, result를 파일의 내용을 전달하는 것으로 약속하고 실행한다.

  ```javascript
  // fs 모듈 불러오기
  var fs = require('fs');
  
  // readFile - 비동기적인 방식
  console.log('A');
  fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
      console.log(result);
  });
  console.log('C');
  ```

  ```bash
  $ node syntax/sync.js
  A
  C
  B
  ```

  * 비동기적인 처리이기 때문에 순서대로 처리되는 것이 아닌 A - C - B 순으로 출력된다.




## callback

> 할 일을 하며 실행하는 함수?

* **익명함수**

  * 위와 아래의 함수는 같은 함수이다.
  * 익명함수는 함수의 이름이 없기 때문에 호출을 하기 위해서 변수에 저장시킨 후 실행한다.
    * 즉 함수가 값이라는 것을 생각할 수 있다.

  ```javascript
  function a() {
      console.log('A')
  }
  ```

  ```javascript
  // function a() {
  //     console.log('A')
  // }
  
  // 익명함수 - 위에 있는 함수와 같지만 이름이 없다.
  // 호출해주기 위해 변수에 저장해준다.
  // a라는 변수에 function을 값으로 저장해주었다. (= 함수가 값이다!)
  var a = function () {
      console.log('A')
  }
  
  // 함수 실행
  a();
  
  // A가 출력된다.
  ```



* **callback**

  ```javascript
  var a = function () {
      console.log('A')
  }
  
  function slowfunc(callback){
      callback();
  }
  
  slowfunc(a);
  ```

  ```bash
  $ node syntax/callback.js
  A
  ```