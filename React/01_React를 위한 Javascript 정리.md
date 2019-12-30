# 01_React를 위한 Javascript 문법 정리



## React를 위한 JS 문법 정리

1. `var` /  `let` / `const`

   * `var`

     1. 헷갈리는 함수레벨 스코프를 가지고 있다.

        ```javascript
        (function() {
          if (true) {
            var variable = "function scope";
          }
        
          console.log(variable); // 'function scope'
        })();
        ```

     2. 중복 선언이 가능하다.

     3. 생략이 가능하다.

     4. 호이스팅을 할 시에 `Error`가 아닌 `undefined`가 뜬다.

        ```javascript
        (function() {
          console.log(variable); // undefined
          var variable = "hoisted";
        })();
        
        (function() {
          var variable;
          console.log(variable); // undefined
          variable = "hoisted";
        })();
        
        ```

   * `let`
     1. 블록레벨 스코프
     2. 중복 선언이 불가능하다.
        * 중복 선언시 `SyntaxError`가 발생한다.
          * `SyntaxError`란 문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류이다.
     3. 호이스팅
        * `ReferenceError`가 발생한다.
          * `ReferenceError`란 존재하지 않는 변수를 참조했을 때 발생하는 오류이다.
   * `const`
     1. primitive
     2. Reference

2. `hoisting`
   * 모두 변수 선언은 `hoisting`된다.
   * 변수가 `함수내`에서 정의되었다면, 선언이 **함수의 최상위**로 변경된다.
   * 변수가 `함수밖`에서 정의되었다면, 선언이 **전역 최상위로 변경**된다.
   * 선언만 끌어올리고 할당된 값은 끌어올리지 않는다.
   * `var` 선언 에서는 Error가 아닌 undefined가 발생한다.
   * `let/const` 선언에서는 scope에 진입하게되면 Error가 발생하지 않지만, 그렇지 않다면 `ReferenceError`가 발생하게 된다.

3. `template string`
   * ``안에에 ${}를 사용하여 javascript 표현식을 넣어서 사용할 수 있다.

4. `arrow function`

   * `function`표현에 비해 구문이 짧으며 자신의 `this`, `arguments`, `super`, `new.target`을 생성하지 않는다.
   * `arrow function`은 메소드 함수가 아닌 곳에 적합하다.
   * 생성자로 사용할 수 없다. `new`를 사용하였을 때, 객체가 생성되지 않는다.

   ```javascript
   // 생성자 사용 불가
   var Foo = () => {};
   var foo = new Foo(); // TypeError: Foo is not a constructor
   ```

   ```javascript
   // this
   function Foo() {
     this.name = "Yeji";
   	
     // function은 자신의 this을 정의하기 때문에 this.name은 출력되지 않는다.
     setTimeout(function() {
       console.log(this.name); // undefined
     }, 1000);
   	
     // arrow function은 자신의 this를 정의하지 않기 때문에 함수 밖의 this.name을 출력한다.
     setTimeout(() => {
       console.log(this.name); // 'Yeji'
     }, 1000);
   }
   ```

5. `함수.bind(디스)`

   * 함수의 `this`를 인자로 넣은 "디스"를 사용하는 함수를 만들어 리턴한다.

   ```javascript
   function hello() {
     console.log(`안녕하세요 ${this.name}`);
   }
   
   const yeji = {
     name: "Yeji"
   };
   
   const helloYeji = hello.bind(yeji);
   
   helloYeji(); // 안녕하세요 Yeji
   ```

6. `destructuring`

   * 구조 분해 할당
   * **배열**이나 **객체**의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식

   ```javascript
   const foo = {
     a: "에이",
     b: "비이"
   };
   
   const { a, b } = foo;
   console.log(a, b); // 에이 비이
   
   const bar = ["씨이", "디이"];
   
   const [c, d] = bar;
   console.log(c, d); // 씨이 디이
   
   // 새로운 변수 이름으로 할당하기
   const { a: newA, b: newB } = foo;
   console.log(newA, newB) // 에이 비이
   ```

7. `Spread`와 `Rest`

   * `Spread`

     * `...` 으로 배열, 객체를 넣을 수 있다.

     ```javascript
     function sum(a, b, c) {
       return a + b + c;
     }
     
     console.log(sum(1, 2, 3)); // 6
     
     const numbers = [2, 3, 4];
     
     console.log(sum(...numbers)); // 9
     ```

   * `Rest`

     * 정해지지 않은 수 인수를 배열로 나타낼 수 있게 한다.

     ```javascript
     function rest1(...args) {
       console.log(args); // [ 'yeji', 25, 'korea' ]
     }
     
     rest1("yeji", 25, "korea");
     
     function rest2(name, ...args) {
       console.log(name, args); // yeji [ 25, 'korea' ]
     }
     
     rest2("yeji", 25, "korea");
     ```

8. `callback`
   * 과거 비동기 처리를 위한 선택

9. `Promise`

   * `Promise` 객체를 만들고, 로직 처리 성공(resolve)과 실패(reject)를 알려준다.
   * `then`과 `catch`를 통해 메인 로직에 전달한다.

   ```javascript
   function foo() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         // 성공
         resolve();
       }, 1000);
     });
   }
   
   foo().then(() => {
     console.log("end");
   });
   console.log("이것이 먼저 실행");
   
   // 이것이 먼저 실행
   // end
   
   ```

10. `async - await`
    * 기본적으로 `Promise`를 사용한다.
    * `async` 키워드가 붙은 함수 안에서만 `await` 키워드를 사용할 수 있다.
    * `try - catch` 구문을 사용하여 error처리를 한다.

11. `generator` 객체
    * `function*`으로 만들어진 함수를 호출하면 반환되는 객체이다.
    * `function*`에서 `yield`를 호출하여 다시 제어권을 넘겨준다.
    * `next().value`를 했을 때, 다음 단계가 없으면 `undefined`가 나온다.