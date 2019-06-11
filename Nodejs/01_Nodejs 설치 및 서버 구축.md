# 01. Nodejs 설치 및 서버 구축

## Nodejs 설치





## 서버 구축

```javascript
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    // C:\Users\student\Desktop\예지\Nodejs
    // \nodejs/3.html

    // nodejs가 경로에 해당하는 파일을 열어서 화면에 나타낸다.
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
```

