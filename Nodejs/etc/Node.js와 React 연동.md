# Node.js와 React 연동

>  **1. create-react-app 의 v2 버전의 기능 중 하나인 proxy 설정 커스터 마이징을 이용하여 Node.js와 React를 연동한다.**
>
> **2. npm-run-all 모듈을 이용해서 명령어 하나로 React와 Node.js server를 동시에 동작하도록 한다.**



## React 설치 및 프로젝트 생성

```bash
npm install -g create-react-app
```

```bash
create-react-app my-project
```



## Node.js, Express 설치 및 프로젝트 생성

> npm start시 React와 Express를 동시 실행시키기 위하여 React 프로젝트 생성 후, 프로젝트 폴더 안에 Express 프로젝트 생성

```bash
brew install node
```

* `node` 설치 후 확인을 위한 명령어

```bash
node -v
npm -v
```

* `express` 설치 및 `project` 생성

```bash
npm install -g express-generator
```

```bash
express my-project-server
```



## Proxy 

* **proxy 동작** 
  * proxy를 추가하여 express backend server가 존재하는 `localhost:3001`에 접근하도록 한다.
  * 이는 React 앱이 기본적으로 이미지, CSS와 같은 정적 파일이 아닌 것에 대한 요청을 할 때마다 이러한 요청을 `proxy`에 지정된 서버로 전달한다.
  * `proxy`라인의 port는 Node 서버가 실행중인 port와 일치해야한다.

<img width="642" alt="proxy" src="https://user-images.githubusercontent.com/45961217/68184828-6b0a3180-ffe3-11e9-934d-ea0617967033.png">

* **proxy 설정**

  * React 프로젝트의 `package.json` 에 아래의 코드를 추가한다.
  * Node port인 3001 port를 사용한다.

  ```json
  "proxy": "http://localhost:3001"
  ```

* **proxy 사용 이유**

  * cross-origin-resource-sharing 문제를 피하기 위하여 proxy를 사용한다.



## React, Node 동시 실행

> node 서버를 실행하고, 다른 터미널을 열어서 react를 실행해야하는 번거로움을 피하기 위하여 **npm-run-all**을 사용한다.

* `npm-run-all` **설치**

  ```bash
  npm install npm-run-all -D
  ```

* `package.json` **수정**

  * `nodemon` : node.js의 코드가 수정되었을 때 껐다 켜는 번거로움을 피하기 위하여 node.js 소스 수정시 자동으로 서버를 재시작시켜주는 `nodemon`을 사용한다. 그러므로 `node`가 아닌 `nodemon`으로 작성한다.

  ```json
  "scripts": {
      "start": "npm-run-all --parallel start:**",
      "start:client": "react-scripts start",
      "start:server": "nodemon ./my-project-server/bin/www",
  },
  ```

* `npm start`를 실행하면 React와 Node server가 실행된다.





