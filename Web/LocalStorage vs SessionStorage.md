# local Storage vs session Storage

> Local Storage와 Session Storage는 HTML5에서 추가된 저장소이며 `key-value` 형태이다.



## 1. local Storage

* **local Storage**는 사용자가 지우기 전까지 브라우저에서 데이터가 지워지지 않는다.
* 지속적으로 필요한 데이터는 **local Stroage**에 저장한다.
  * 하지만, 비밀번호와 같은 정보는 저장하지 않도록 한다. (클라이언트에 저장되는 것이므로 안전하지 않다.)
* **local Storage**는 `window.localStorage`에 위치한다.

```javascript
// local Storage 저장
localStorage.setItem(키, 값)

// local Storage 조회
localStorage.getItem(키)

// local Storage 해당 키/값 제거
localStorage.removeItem(키)

// local Storage 전체 데이터 제거
localStorage.clear()
```

* **local Storage**에 객체 저장하는 방법

  ```javascript
  localStorage.setItem('object', JSON.stringify({ a: 'b' }));
  JSON.parse(localStorage.getItem('object')); // { a: 'b' }
  ```

  

## 2. session Storage

* **session Storage**는 사용자가 윈도우나 탭을 종료하면 데이터가 삭제된다.
* 일회성 정보나 간단하게 필요한 정보만 **session Storage**에 저장한다.
* **session Storage**는  `window.sessionStorage`에 위치한다.

```javascript
// session Storage 저장
sessionStorage.setItem(키, 값)

// session Storage 조회
sessionStorage.getItem(키)

// session Storage 해당 키/값 제거
sessionStorage.removeItem(키)

// session Storage 전체 데이터 제거
sessionStorage.clear()
```



