# React start



## React를 위한 JS 문법 정리

* `hoisting`
  * 선언만 끌어올리고 할당된 값은 끌어올리지 않는다.
* `var`
* `let` 
  * 블록 레벨 스코프
  * 중복 선언 => `SyntaxError` (객체는 문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류)
  * 호이스팅 => `ReferenceError`(객체는 존재하지 않는 변수를 참조했을 때 발생하는 에러)
* `const`

* `template string`
  * ``속에 ${}을 사용하여 자바스크립트 표현식을 넣어서 사용할수 있다.

* `arrow function`
  * 자신의 `this`를 만들지 않는다.
  * 생성자로 사용할 수 없다.
    * `new`를 사용했을 때, 객체가 생성되지 않는다.
  * 항상 익명 함수
  * 리턴만 있으면, {} 생략 : `const b = () => '리턴';`
  * 인자가 하나면, () 생략 

* `함수.bind` 
  * 리액트에서 주로 많이 쓰는 편

* `spread`

* `rest`

* `callback`

* `Promise`
  * `Promise `객체를 만들고, 로직 처리 후 성공(resolve)과 실패(reject)를 알려준다.
  * `then`과 `catch`를 통해 메인 로직에 전달한다.

* `async - await`
  * 기본적으로 `Promise`를 사용한다.
  * `async`키워드가 붙은 함수 안에서만 `await` 키워드를 사용할 수 있다.
  * `try - catch` 구문을 사용하여 error처리를 한다.

* `generator` 객체
  * `function*`으로 만들어진 함수를 호출하면 반환되는 객체이다.
  * `function*`에서 `yield`를 호출하여 다시 제어권을 넘겨준다.
  * `next().value`를 했을 때, 다음 단계가 없으면 `undefined`가 나온다.



## React Concept

* prop을 알아야 react를 잘알고 사용해야된다.
* `CSR` vs `SSR` - 차이점을 알고 있어야함,



## React가 하는 일

* 핵심 모듈 2개로 react를 실행한다.
  * `react`, `react dom`
* `ReactDom.render()` 
  * React 엘리먼트를 제공된 `container`의 DOM에 렌더링하고 컴포넌트에 대한 참조를 반환한다.
  * 만들어진 리액트 컴포넌트를 실제 DOM에 연결할 때, ReactDom을 이용한다.



## JSX

> react element를 만드는 방법

* 최상위요소를 2개 사용하고 싶은 경우

  ```javascript
  // fragment
  <>
  </>
  ```

* {}를 사용하여 자바스크립트 객체를 넣을 수 있다.



## React Component 만드는 법

* 무조건 JSX를 사용하며, React.Component를 사용한다.





* state와 props가 렌더를 결정하는 기준이 된다.
* hook이 state를 지원한다.



# npx

> npm 5.2.0 이상부터 함께 설치된 커맨드라인 명령어

