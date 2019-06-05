# 02. Routers, Views

* #### Express는 MVC 패턴을 가지고 있는 웹 프레임워크이다.

  ```
  - Model : DB, controller에서 요청이 들어오면 정보를 return해준다.
  
  - Views : Web Page를 보여주는 template(ejs), 사용자에게 보여지는 모습을 제공한다.
  
  - Controller : client에게 요청을 받고 응답을 조종한다.
  ```

  * **이러한 패턴을 가지고 있기 때문에 Routers 폴더와 Views폴더를 생성하여 더 간단하고 쉽게 관리할 수 있다.**



## /routers

> 앞서 만들어 놓은 `app.js`는  사용자로부터 받은 요청에 대한 URL들을 이어주는 역할만을 한다.

* `index.js`
  * `routers` 폴더 안에 있는 file들은 url path를 관리하고 **모든 요청을 처리**한다.

  ```javascript
  // routers/index.js
  
  // url path 관리하는 file
  let express = require('express')
  
  // express에서 routing을 하는 객체를 사용하겠다.
  let router = express.Router()
  
  // module을 require할 때 router를 반환한다.
  module.exports = router
  ```


* `app.js`

  * 이를 통해 `app.js`를 좀 더 간단하게 작성할 수 있다.

  ```javascript
  // app.js
  let index = require('./routers/index')
  
  // /로 요청이 들어온다면, index file로 가서 처리한다.
  app.use('/', index)
  ```



## /views

> template을 모아놓은 폴더이다.

* `index.ejs`
  * ejs라는 template rendering engine을 사용한다. (확장명을 ejs로 사용하지만 code는 html과 동일하다.)\
  * 딕셔너리 형태로 값을 넘겨줄 수 있다.
    * `<%= %>` 형태를 사용하여 값을 넘겨 줄 수있다. 

  ```ejs
  <!-- index.ejs -->
  
  <!DOCTYPE html>
  <html lang="ko">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Main</title>
  </head>
  <body>
      <h1>hello world</h1>
  </body>
  </html>
  ```


* `app.js`

  * views 폴더를 사용하며, ejs를 사용하겠다고 `app.js`에 명시해준다.

  ```javascript
  let express = require('express')
  let bodyParser = require('body-parser')
  
  // view engine 중 ejs를 사용하겠다고 설정
  app.set('view engine', 'ejs')
  // views folder에서 처리하겠다. 
  app.set('views', './views')
  // bodyParser 사용
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:false}))
  ```

  * bodyParser
    * 
