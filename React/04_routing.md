# 04_React Routing

> react-router-dom



## SPA

> **S**ingle **P**age **A**pplication

* **SPA**란 브라우저에 최초에 한번 페이지를 전체 로드하고 그 뒤로부터는 필요한 component를 로드하여 페이지를 보여주는 방식이다.
  * `index.html`파일 하나에서 `js, css`등 리소스 파일들과 모듈들을 로드해서 페이지 이동 없이 특정영역만 새로 모듈을 호출하고 데이터를 바인딩하는 개념이다.
* **SPA**의 장점
  * 히스토리를 관리할 수 있다.
  * 논리적으로 페이지가 분리되어서 이동할 수 있다.
* **React SPA 라우팅** 과정
  1. 브라우저에 최초에 `/` 경로로 요청을 한다.
  2. 요청을 하면, React Web App을 내려준다.
  3. 내려받은 React App에서 `/` 경로에 맞는 component를 보여준다.
  4. React App에서 다른 페이지로 이동하는 동작을 수행하면, 새로운 경로에 맞는 component를 보여준다.



## react-router

* React에서 라우팅을 하기 위해서 패키지를 설치한다.

  * 클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 해주는 역할을 한다.
  * 이 패키지는 `create react app`에 기본적으로 내장된 패키지가 아니기 때문에 반드시 설치를 해야한다.
  * 이 패키지는 가장 대표적인 라우팅 패키지이다.

  ```bash
  npm install react-router-dom
  ```

* **react-router**를 사용하기 위해서 `BrowserRouter`를 사용하여 감싸준다.

* Route 컴포넌트에 `경로(path)` 와 `컴포넌트(component)` 를 설정하여 나열해준다.

* 브라우저에서 요청한 경로에 Route의 `path` 가 들어있으면 해당 `component`를 보여준다.

```javascript
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
```

* `/`가 포함된 URL은 모두 `Home component`와 함께 나타나기 때문에 정확히 `component`와 `path`를 연결시키기 위하여 **exact**를 사용한다.



## Dynamic routing

> * 라우터 경로에 특정 값을 넣는 방법 - params, query string
>
> * 라우터로 설정한 component는 3가지 props를 전달받게 된다.
>   1. `history`
>      * `history`객체를 통하여 `push`, `replace`를 사용하여 다른 경로로 이동하거나, 앞/뒤 페이지로 이동할 수 있다.
>   2. `location`
>      * 현재 경로에 대한 정보를 가지고 있다.
>      *  `URL query (/about=?foo=bar)` 정보를 가지고 있다.
>   3. `match`
>      * 어떤 라우트에 매칭 되었는지에 대한 정보를 가지고 있다.
>      * `params (/about/:id)`에 대한 정보를 가지고 있다.

1. **params** - `/profile/1`

   * path에 `:`를 사용하여 동적 라우팅을 할 수 있다.

     ```jsx
     <Route path="/profile/:id" component={Profile} />
     ```

   * 이 정보는 `props.match`를 통하여 전달받을 수 있다.

     ```javascript
     props.match.params.id
     ```

   * 전달받은 정보는 `{}`표현식을 사용하여 나타낼 수 있다.

     ```jsx
     export default function Profile(props) {
       const id = props.match.params.id;
       console.log(id, typeof id);
       return (
         <div>
           <h2>Profile 페이지 입니다.</h2>
           {id && <p>id 는 {id} 입니다.</p>}
         </div>
       );
     }
     ```

     

2. **query string** - `/about?name=yeji`

   * path는 동일하게 작성한다.

     ```jsx
     <Route path="/about" component={About} />
     ```

   * `query string`의 정보를 사용할 수 있도록 `query-string`를 설치한다.

     ```bash
     npm install query-string
     ```

     ```jsx
     const { name } = queryString.parse(props.location.search);
     ```

     

## Switch

* 여러 `Route` 중 순서대로 먼저 맞는 하나만 보여준다.
* `exact`를 뺄 수 있는 로직을 만들어 준다.
  * 하지만 `exact`를 사용하는 것이 좋다.
* 가장 마지막에 어디 path 에도 맞지 않으면 보여지는 컴포넌트를 설정해서, **Not Found** 페이지를 만들 수 있다.

```javascript
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```



## JSX 링크로 라우팅 이동하기

* `<a href="/">Home</a>`은 앱을 새로고침하면서 이동한다.

* `<Link to="/">Home</Link>`는 브라우저의 주소를 바꾸고, 맞는 Route 화면을 변경한다.

  * 새로고침 X

* `NavLink`

  * `activeClassName`, `activeStyle` 처럼 active 상태에 대한 스타일 지정이 가능하다.
  * Route 의 path 처럼 동작하기 때문에 `exact `가 있다.

  ```jsx
  import React from 'react';
  import { NavLink } from 'react-router-dom';
  
  const activeStyle = { color: 'green' };
  
  export default function NavLinks() {
    return (
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/profile" activeStyle={activeStyle}>Profile</NavLink></li>
        <li>
          <NavLink
            to="/about"
            activeStyle={activeStyle}
            isActive={(match, location) => {
              if (location.pathname !== '/about') return false;
              const searchParams = new URLSearchParams(location.search);
              return !searchParams.has('name');
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about?name=yeji"
            activeStyle={activeStyle}
            isActive={(match, location) => {
              if (location.pathname !== '/about') return false;
              const searchParams = new URLSearchParams(location.search);
              return searchParams.has('name');
            }}
          >
            About?name=yeji
          </NavLink>
        </li>
      </ul>
    );
  }
  ```

  

## HOC

* connect({})(Login)
* create(Login, {})
* withRouter()