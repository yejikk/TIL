# 05_Life Cycle

> Rendering 함수를 기준으로 잡고 Rendering 함수 이전과 이후 시점에서 Lifecycle을 실행하고 관리하는 것이 Lifecycle Method이다.

1. Mounting
   * 생성
   * 리액트 컴포넌트가 생성될때 끼워넣는것
2. Unmounting
   * 리액트 컴포넌트를 없애는 것
3. Updation
   * Props가 바뀔때
   * State가 바뀔때



## 현재 version

> Component 생성 및 마운트

* constructor
* componentWillMount
* render
* componentDidMount
  * timer를 걸거나 request요청을 할 때 사용한다.



state가 변경되면 shouldComponentUpdate부터 실행된다.

* shouldComponentUpdate부터
  * 중요! 최적화 담당
  * boolean형태의 값을 리턴해야한다.
  * return true면 그 다음단계로 이동 ()
* hook을 사용하려면 class component를 사용해야한다.



```jsx
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    // 현재 클래스의 변화를 유도하는 비동기 함수
    // render와 Unmount에서는 사용이 불가하다.
    // 비동기적으로 실행되기 때문에 render에서 사용이 불가능하고
    // Unmount는 사라지는 과정이기 때문에 사용이 불가능하다.
    this.setState = {
      
    }
  }

  // Render 함수가 이루어지기 직전 메소드
  // 화면에 UI가 보여지기 전
  componentWillMount() {}

  // Rendering이 최초 1회 실행된 메소드
  componentDidMount() {}

  // 더이상 사용하지 않을 때 메모리 누수를 방지하기 위하여 작업을 초기화한다.
  componentWillUnmount() {}

  render() {
    return <> </>;
  }
}

export default LifeCycle;
```



## Props vs State

* `Props`
  * 상위 계층 컴포넌트와 데이터 교환을 할 수 있다.
* `State`
  * 내부적으로 사용한다.

```jsx
import React from "react";
import "./App.css";

// state - 해당하는 컴포넌트 안에서만 내부적으로 사용한다.
// 다른 컴포넌트와의 데이터 교환을 하지 않고 외부와 관련없이 내부적으로 사용한다.

// props - 상위 계층의 컴포넌트와 데이터 교환을 위해서 사용한다.
class Fast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state안에 props 데이터를 저장할 수 있다.
      props,
      lang: "javascript",
      fn: function () {},
      date: new Date(),
    };
  }

  render() {
    const { lang, date } = this.state;

    return (
      <div>
        {lang} {date}
      </div>
    );
  }
}

export default Fast;
```

