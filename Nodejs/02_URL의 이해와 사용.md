# 02. URL의 이해와 사용

## 1) URL의 이해

![](C:\Users\kig95\Desktop\SSAFY\TIL\image\URL.png)

* **HTTP** 
  * 웹 브라우저와 웹 서버가 통신하기(정보를 주고 받기) 위한 통신 규칙

* **host**
  * 인터넷에 접속되어있는 각각의 컴퓨터

* **port**
  *  한대의 컴퓨터 안에 여러개의 서버가 있을 수 있기 때문에, 접속할 때 포트 번호를 정해준다면 해당 포트와 연결되어있는 서버를 실행시킨다.
* **path**
  * 컴퓨터 안에 있는 디렉토리 안에 있는 파일

* **query string**
  * 쿼리 스트링의 값을 변경하면 웹서버에게 읽고 싶은 데이터를 전달할 수 있다. 
  * 물음표로 시작하며 값과 값은 &, 값의 이름과 값은 =로 구분한다.



## 2) URL의 사용

```javascript
var http = require('http');
var fs = require('fs');
// url이라는 모듈을 사용할 것이다.
var url = require('url');

var app = http.createServer(function(request,response){
    // id=HTML 이라면 request.url 안에 들어간다.
    var _url = request.url;
    
    var queryData = url.parse(_url, true).query;
    console.log(queryData);
    // { id: 'html' } 이 나온다

    console.log(queryData.id)
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(queryData.id);
    // html이 화면에 나타난다.
 
});
app.listen(3000);
```

* **nodejs url parse query string** 검색

  * url에 들어있는 값을 추출하여 원하는 값을 얻어내기 위해서는 url을 분석해서 데이터를 추출해야한다.
  * query data안에는 객체가 존재한다.
  * 파싱 방법을 통해 데이터를 추출할 수 있다.
    * `localhost:3000/?id=HTML`

  ```javascript
  var queryData = url.parse(_url, true).query;
  console.log(queryData);
  // { id: 'html' }
  console.log(queryData.id)
  // HTML
  ```



* `response.end()`는 ()안에 들어와있는 값을 화면에 출력해주는 역할을 한다.

  ```javascript
  response.end(queryData.id)
  ```

  * 화면에 id에 해당하는 HTML이 뜰 것이다.

