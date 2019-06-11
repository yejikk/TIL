# 04. Not found 오류 페이지 구현

> 존재하지 않는 정보에 대한 요청이 들어왔을 때 Not found 오류 메세지를 전송하는 방법 알아보기



* `main.js`

  * `console.log(url.parse(_url, true))` 를 출력했을 때

    * `localhost:3000/`으로 접속
    * pathname은 query string을 제외한 pathname을 뜻한다.

    ```bash
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: [Object: null prototype] {},
      pathname: '/',
      path: '/',
      href: '/' }
    ```

    * `localhost:3000/?id=CSS`로 접속
      * 위와 같이 pathname이 query string을 제외하고 나타나는 것을 알 수 있다.

    ```bash
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?id=CSS',
      query: [Object: null prototype] { id: 'CSS' },
      pathname: '/',
      path: '/?id=CSS',
      href: '/?id=CSS' }
    
    ```

  * 만약 존재하지 않는 요청이 들어왔을 때, **404를 상태 코드를 전달하여 Not Found**가 화면에 뜨도록 code를 작성하였다.

    ```javascript
    var app = http.createServer(function(request,response){
        var _url = request.url;
        var queryData = url.parse(_url, true).query;
        // pathname이라는 변수 안에 pathname 넣어주기
        var pathname = url.parse(_url, true).pathname;
        var title = queryData.id;  
    
        // 현재상태 = root
        // 주어진 url 분석 해보기
        // pathname = query string을 제외한 path만을 보여주는 것
        console.log(url.parse(_url, true))
    
        // 만약 pathname이 '/'이라면 올바르게 요청이 들어온 것임.
        if (pathname === '/') {
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                var template = `
            <!doctype html>
            <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
            </html>
            `;
            // 200 code를 주면 성공했다는 것을 표현한다.
            response.writeHead(200);
            response.end(template);
            });
        } else {
            response.writeHead(404);
            response.end('Not Found')
        }
    
    })
    app.listen(3000);
    ```

    ![](C:\Users\kig95\Desktop\SSAFY\TIL\image\notfound.png)

    * 존재하지 않는 요청을 보냈을 때 Not Found가 뜨는 것을 확인할 수 있다.