# 03_React Project Setting

> Create React App
>
> Prettier + ESLint + husky + lint-staged를 사용하여 더 예쁘고 편하게 setting하기
>
> React component 디버깅



## CRA

* **Create React App**

* `npx` 명령어를 사용하여 react app 생성하기

  * `npx`란 npm 5.2.0 이상부터 함께 설치된 커맨드라인 명령어

  * `npx`가 필요한 이유?

    * 프로젝트의 로컬에 설치된 패키지의 실행 커맨드를 사용하려면, `package.json`의 `npm scripts`에 명령어를 추가하여 사용해야 했지만 **npx** 로 바로 실행이 가능하다.

    * 전역으로 실행하고 싶은 패키지가 있을 경우, `npm i -g` 를 이용하여, 전역에 꼭 설치해서 사용해야 가능했지만, **npx** 로 최신 버전의 패키지를 받아 바로 실행이 가능하다.

  ```bash
  npx create-react-app tic-tac-toe
  ```

* React 핵심 모듈 
  * `react`, `react-dom`
* CRA를 사용하는데 필요한 모듈
  * `react-scripts`



## ESLint

> The pluggable linting utility for JavaScript and JSX
>
> vscode에서 **ESLint**를 설치한다.

* Javascript 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구

* 즉, Javascript 문법검사를 해준다.

* **ESLint** 설치하기

  ```bash
  npm init -y
  
  npm install eslint -D
  
  npx eslint --init
  ```

* `rules` 추가하기

  * `rules`를 추가하여 error를 표시한다.

  ```javascript
  {
      "env": {
          "commonjs": true,
          "es6": true,
          "node": true
      },
      "extends": "eslint:recommended",
      "globals": {
          "Atomics": "readonly",
          "SharedArrayBuffer": "readonly"
      },
      "parserOptions": {
          "ecmaVersion": 2018
      },
      "rules": {
          "semi": [
              "error",
              "always"
          ]
      }
  }
  ```

* 설정 커스터마이징 하기

  * `package.json`
    * `eslintConfig`안에 `rules`필드를 만들어 사용한다.

  ```javascript
  "eslintConfig": {
    "extends": "react-app",
      "rules": {
        "semi": [
          "error",
          "always"
        ]
      }
  },
  ```

  

## prettier

> An opinionated code formatter
>
> vscode에서 **Prettier**를 설치한다.
>
> * Command + Shift + P > Format Document
> * `setting.json` -> "editor.formatOnSave": true

* 정해진 규칙에 따라 자동으로 코드 스타일을 정리해주는 도구이다.

* **prettier** 설치하기

  ```bash
  npm init -y
  
  npm i prettier -D
  ```

* `.prettierrc`

  * `.prettierrc`에 원하는 코드 스타일을 설정할 수 있다.

  ```
  {
  	"singleQuote": true,
  	"trailingComma": all
  }
  ```

  

## husky

* 프론트엔드 개발 환경에서 `git hook`을 손쉽게 제어하도록 도와주는 tool

  * `git hook`이란 `git`을 쓰다가 Commit, push 등이 일어났을 때, 그 순간에 `갈고리`를 걸어서 특정 스크립트가 실행되도록 도와주는 것이다.

* **husky** 설치하기

  ```bash
  npm init -y
  
  git init
  
  npm i huskey -D
  ```



## React Developer Tools

* 크롬 확장 프로그램