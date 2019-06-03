# POST 방식으로 전송된 데이터 받기

> POST 방식으로 전송된 데이터를 받아서 파일로 저장하는 방법

![1559287862602](assets/1559287862602.png)



```javascript
var qs = require('querystring');
```

```javascript
var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    
    // 1. pathname이 '/'인 경우
    // => 사용자가 query string만을 이용해서 상세 페이지를 요청한 경우
    if (pathname ==='/') {}
    // 2. pathname이 '/create'인 경우
    // => 사용자가 localhost:3000/create라는 주소로 글쓰기 화면을 요청한 경우
    else if (pathname ==='/create') {}
    // 3. pathname이 '/create_process'인 경우
    else if (pathname ==='/create_process') {
      var body = '';
          request.on('data', function(data) {
      body += data;
    });
    // 조각조각 전송하다가 더이상 들어올 정보가 없으면 아래 함수를 실행한다.
    request.on('end', function() {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
    });
    response.writeHead(200);
    response.end('Success');
    }
    // 3. 서버에서 존재하지 않는 pathname을 요청한 경우
    else {}
})
```

* 웹 브라우저가 POST 방식으로 데이터를 전송할 때,
  데이터가 엄청나게 많은 경우 한 번에 처리하다가 문제가 발생할 위험이 있다.

* 따라서 Node.js에선 POST 데이터 전송량이 많을 경우를 대비하여 아래와 같은 사용방법을 제공한다.
  예를 들어 100만큼의 데이터가 있으면 이 데이터들을 조각조각 전송하면서, 조각들을 서버 쪽에서 수신할 때마다 서버는 콜백함수를 호출하기로 약속되어 있다. 콜백함수 안의 인자에 수신한 정보가 담겨있다.

* **데이터를 전송받기 위해 data의 콜백함수를 실행**한다.

  ```javascript
  var body = '';
  
  // 조각조각의 데이터들을 전송받아서 body에 붙여준다.
  request.on('data', function(data) {
    body += data;
  });
  ```

  조각조각 전송하다가 **더이상 들어올 정보가 없으면 end의 콜백함수를 실행**한다.

  ```javascript
  request.on('end', function() {
    var post = qs.parse(body);
    var title = post.title;
    var description = post.description;
  });
  ```

  body를 파싱하면 어떤 정보가 넘어올까?

  ```javascript
  var post = qs.parse(body);
  console.log(post);
  console.log(post.title);
  ```

  ```
  [Object: null prototype] { title: 'Harry', description: 'Potter' }
  Harry
  ```

  

  

  