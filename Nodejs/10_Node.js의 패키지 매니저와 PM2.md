# 10. Node.js의 패키지 매니저와 PM2

> 여러 사람이 모듈을 이용해서 소프트웨어를 만들게 될 때, 사용하는 모듈이 많아지면 여러가지 복잡한 문제가 발생한다. 
>
> 이를 관리하는 도구가 패키지 매니저이다.
>
> 이 중 대표적인 패키지 매니저인 NPM을 사용하는 법을 알아본다.

> 실행중인 Node.js Application을 관리하는 프로세스 매니저 PM2 사용법을 알아본다.



## 1) 패키지 매니저 - NPM

* **NPM**
  * 대표적인 Node.js 패키지 매니저
  * 소프트웨어에서 사용하고 있는 모듈을 관리하는 도구
  * NPM은 Node.js를 설치할 때 함께 설치되는 패키지 매니저이다.



## 2) PM2

> 실행 중인 Node.js Application을 관리하는 프로세스 매니저

1. **PM2 설치하기**

   ```bash
   $ npm install pm2 -g
   ```

2. `main.js`**실행하기**

   ```bash
   $ pm2 start main.js
   ```

3. **pm2 명령어**

   * 모니터링

     ```bash
     $ pm2 monit
     ```

   * Microservice

     ```bash
     $ pm2 list
     $ pm2 stop
     $ pm2 restart
     $ pm2 delete
     ```



4. `$ pm2 start main.js --watch`
   * watch 명령어를 통해 application을 실행할 경우 PM2가 자동으로 main.js의 소스코드 변경을 감지하고 서버를 껐다 켜주기 때문에, 새로고침만 하면 바로 변경 사항을 확인할 수 있다.



5. `$ pm2 log`
   * watch 명령어를 통해 실행하면 이전에 바로바로 뜨던 에러들이 콘솔창에 뜨지 않는데,  log 명령어를 사용하면 변경사항 혹은 에러내용을 쉽게 확인할 수 있다.