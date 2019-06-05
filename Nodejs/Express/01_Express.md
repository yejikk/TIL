# 01. Express

> Express란?
>
> Express 디렉토리 구조
>
> Express 설치 및 간단한 서버 구동



## 1. Express란?

> Nodejs로만 서버를 만들 시에 관리가 복잡하다. 이를 편리하게 하기 위해서 사용한다.
>
> MVC 구조를 가지고 있다. (Model View Controller)

- Nodejs를 위한 빠르고 개방적인 간결한 웹 프레임워크이다.
  - Node Web Frameworks의 기본 라이브러리이다.
- Nodejs의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크이다.
- HTTP 통신 요청(Request; GET, POST, DELETE)에 대한 핸들러를 만든다.
- 접속을 위한 port나 응답(response) 렌더링을 위한 template 위치같은 공통 web application setting을 한다.



## 2. Express 디렉토리 구조

```
express/
├── package.json
├── public
│   └── css
│   └── style.css
├── routers
│   └── main.js
├── server.js
└── views
 ├── index.ejs
```

1. **package.json**

   * project의 이름, 버전, 설치한 패키지 list 등에 대한 정보를 담고 있는 파일이다.

   ```json
   {
     "name": "yeji",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "body-parser": "^1.19.0",
       "ejs": "^2.6.1",
       "express": "^4.17.1",
       "mysql": "^2.17.1"
     }
   }
   ```



2. **routers**
   * 브라우저에서 request(요청)가 왔을 때 서버에서 어떤 작업을 할지 router를 통하여 설정해준다.
   * 이러한 router 파일을 관리하기 위한 폴더이다.



3. **views**
   * HTML 페이지를 띄우기 위한 html 파일들을 모아놓은 폴더이다.
   * 확장명으로 html을 사용하지 않고 **ejs**(template 엔진)를 사용한다.



## 3. Express 설치 및 서버 구동

1. **설치**

   * npm 초기화

     * `package.json` 파일이 생성된다. 

     ```bash
     $ npm init
     ```

   * ejs 설치

     * express에서 template 엔진으로 사용한다.

     ```bash
     $ npm install ejs
     ```

   * express 설치

     ```bash
     $ npm install express --save
     ```




2. **express 서버 구동**

   ```javascript
   // express module
   let express = require('express')
   
   // express instance 생성
   // 앞으로 서버 이름은 app이다.
   let app = express()
   
   app.listen(3000, function(request, response) {
       console.log('hello, world!')
   })
   ```

   * `localhost:3000/`으로 접속하여 hello, world가 뜨는 것을 확인할 수 있다.

