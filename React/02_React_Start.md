# 02_React_Start

> React Concept, React 라이브러리, JSX, React Component 만드는 법, 
>
> Props와 State, Event Handling, Component Life Cycle



## 1. React Concept

* View 라이브러리
* Component Based Development
* Virture DOM
* JSX
* CSR & SSR



## 2. React 라이브러리

> React의 핵심 모듈 
>
> 1. react 
> 2. react-dom 
>
> React Frontend는 Component를 정의하고, 실제 DOM에 Component를 그려준다.

* **React**
  * React는 React 라이브러리의 진입점이다.
  * `import React from react`를 작성하여 사용한다.
* **ReactDom**
  * 만들어진 React Component를 실제 DOM에 연결할 때 **ReactDom을** 사용한다.
  * `ReactDom.render()`
    * React Element를 제공된 `container`의 DOM에 렌더링하고 component에 대한 참조를 반환한다.



## 3. JSX

> JSX는 자바스크립트 문법 확장이다.
>
> JSX는 React 요소를 만든다.
>
> - React Element를 만드는 방법이다.
>
> Babel은 JSX를 `React.createElement()` 호출로 컴파일한다.

* **JSX 문법**

  * 최상위 요소가 하나여야한다.

    * 만약, 최상위 요소를 2개 이상 사용하고 싶은 경우 처음 요소를 `<> </>`로 만들어준다.
    * 또한, 자식들을 바로 렌더링하고 싶을 때에도 `<> </>`를 사용한다.
    * `<> </>` => fragment

  * 최상위 요소를 리턴하는 경우, `()`로 감싸야 한다.

  * 자바스크립트 표현식을 사용하려면 `{표현식}`을 사용한다.

  * `if`문을 사용할 수 없다.

    * 삼항연산자 또는 &&로 대체가 가능하다.

  * `style`을 통해 인라인 스타일링이 가능하다.

  * class 대신 `className`을 사용하여 class를 적용할 수 있다.

  * 자식요소가 있으면 닫는 Tag가 꼭 필요하고, 그렇지 않은 경우 열면서 닫아야 한다.

    ```html
    <div></div>
    <br />
    ```



## 4. React Component

> Hooks 는 리액트 v16.8 에 새로 도입된 기능으로서, Hook를 이용하여 Class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있도록 한다.
>
> * Hooks 사용 후 - Class, Function Component

* **Class Component**

  ```javascript
  import React from 'react';
  
  class ClassComponent from React.Component {
    render() {
      return (<div>Hello</div>);
    }
  }
  
  // 사용
  <ClassComponent />
  ```

* **Function Component**

  ```javascript
  import React from 'react';
  
  const FunctionComponent = () => (<div>Hello</div>);
  
  // 사용
  <FunctionComponent />
  ```



## 5. Props / State

> Props와 State 모두 변경이 일어나면, render가 다시 발생한다.

* **Props**
  * Component 외부에서 컴포넌트에게 주는 데이터
* **State**
  * Component 내부에서 변경할 수 있는 데이터
* **Render 함수**
  * Props와 State를 바탕으로 Component를 그리고, 변경이 일어날 경우 Component를 다시 그린다.
  * **Render 함수는** Component를 그리는 방법을 기술하는 함수이다.

