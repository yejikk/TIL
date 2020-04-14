# 02_React Start

> React Concept, React 라이브러리, JSX, React Component 만드는 법, 
>
> Props와 State, Event Handling, Component Life Cycle



## React Concept

* View 라이브러리
* Component Based Development
* Virture DOM
* JSX
* CSR & SSR



## React 장점

1. Virtual DOM(Document Object Model)
   * DOM이란 Document를 구성하는 하나하나의 요소를 DOM이라고 말한다.
   * 실제 DOM이 아닌 Virtual DOM에 먼저 변경 작업을 해준 후, 변경된 부분만 찾아 실제 DOM에 변경해준다. 
   * Virtual DOM을 사용하면 기존 DOM을 변경하는 것보다 연산하는 양을 줄일 수 있다.
2. Only View, NO MVC
   * 모든 것을 View로 보고, 데이터가 한방향으로 흐를 수 있도록 한다.
   * 단반향 데이터 흐름을 하기 위해 `redux`를 사용한다.
3. Reusable Components
   * `Library`
     * Library는 최소한의 기능만을 제공한다.
     * 리액트는 컴포넌트 기반의 Library이다. Library이기 때문에 속도가 매우 빠르다.
     * UI 렌더링을 위한 UI 라이브러리이다.
   * `Framework`
     * 방대하게 필요한 모든 것들을 전부다 제공하는 것들이 Framework이다.
4. Hot reloading
   * 수정을 했을 때, 새로고침하지 않고 저장을 한다면 수정된 부분을 바로 확인할 수 있다.
5. Server Side Rendering
   * Server Side Rendering을 지원하기 때문에 검색 엔진 최적화를 할 수 있다.
   * Backend와 함께 기능을 연동해서 Backend단에서 Page Rendering을 할 수 있다.



## React 라이브러리

> React의 핵심 모듈 - react, react-dom 
>
> React Frontend는 Component를 정의하고, 실제 DOM에 Component를 그려준다.

* **React**
  * React는 React 라이브러리의 진입점이다.
  * `import React from react`를 작성하여 사용한다.
* **ReactDom**
  * 만들어진 React Component를 실제 DOM에 연결할 때 **ReactDom을** 사용한다.
  * `ReactDom.render()`
    * React Element를 제공된 `container`의 DOM에 렌더링하고 component에 대한 참조를 반환한다.



## JSX

> JSX는 자바스크립트 문법 확장이다. 별도의 html 파일을 만들지 않고 독립적으로 재사용 가능한 모두를 만들기 위해 JSX문법을 도입하였다.
>

* **JSX 문법**

  * 최상위 요소가 하나여야한다.

    * 만약, 최상위 요소를 2개 이상 사용하고 싶은 경우 처음 요소를 `<> </>`로 만들어준다.
    * 또한, 자식들을 바로 렌더링하고 싶을 때에도 `<> </>`를 사용한다.
    * `<> </>` => fragment

  * 최상위 요소를 리턴하는 경우, `()`로 감싸야 한다.

  * 자바스크립트 표현식을 사용하려면 `{표현식}`을 사용한다.

  * `if`문을 사용할 수 없다.

    * 삼항연산자 또는 &&로 대체가 가능하다.
  * `num > 0 ? true : false;`
  
* `style`을 통해 인라인 스타일링이 가능하다.
  
* class 대신 `className`을 사용하여 class를 적용할 수 있다.
  
* 자식요소가 있으면 닫는 Tag가 꼭 필요하고, 그렇지 않은 경우 열면서 닫아야 한다.
  
    ```html
    <div></div>
    <br />
    ```
    
  * html 안에서 자바스크립트 문법을 사용하고 싶다면 `{}` 중괄호 사이에 넣고 사용하면 된다.
  
    ```jsx
    const data = [
      {
        title: "Node",
        value: 0,
      },
      {
        title: "React",
        value: 1,
      },
    ];
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            {data.map((item) => (
              <>
                <p>
                  {item.title} - {item.value}
                </p>
              </>
            ))}
          </header>
        </div>
      );
    }
    
    export default App;
    ```
  
* Custom하는 모든 속성들을 `props`로 받아서 사용할 수 있다.



## React Component

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



## Props / State

> Props와 State 모두 변경이 일어나면, render가 다시 발생한다.

* **Props**
  * 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단이다.
  * Component 외부에서 컴포넌트에게 주는 데이터
* **State**
  * Component 내부에서 변경할 수 있는 데이터
* **Render 함수**
  * Props와 State를 바탕으로 Component를 그리고, 변경이 일어날 경우 Component를 다시 그린다.
  * **Render 함수는** Component를 그리는 방법을 기술하는 함수이다.



## Ref

* **Ref**는 render 메서드에서 생성된 DOM 노드나 React Element에 접근하는 방법을 제공한다.
  * Component의 메소드에서 Component의 태그에 직접 접근하고 싶을 때 사용한다.
* 사용해야할 때
  1. 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때
  2. 애니메이션을 직접적으로 실행시킬 때



## 함수형 컴포넌트 vs 클래스 기반 컴포넌트

1. **함수형 컴포넌트**

   * 순수 자바스크립트 함수를 이용하여 컴포넌트를 정의한 것을 말한다.
   * **함수형 컴포넌트**는 `rendering`된 값들을 고정시킨다.
   * `state`, `setState`, `lifeCycle 함수`, `ref callback` => 사용불가

   ```jsx
   function functionComponent() {
     return <p>function Component</p>;
   }
   ```

2. **클래스 기반 컴포넌트**

   * `React.Component` 를 상속받은 클래스를 이용하여 컴포넌트를 정의한 것이다.
   * `state`, `lifeCycle`, `ref` => 사용가능

   ```jsx
   class classComponent extends React.Component {
     render() {
       return <p>class Component</p>;
     }
   }
   ```

   