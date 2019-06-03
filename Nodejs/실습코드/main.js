var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// 똑같은 코드가 여러개 있는 것을 방지하기 위해 재사용할 수 있는 함수를 만든다.
function templateHTML(title, list, body, control) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB2</a></h1>
    ${list}
    ${control}
    ${body}
  </body>
  </html>
  `;
}
function templateList(fileList) {
  var list = '<ul>';
  var i = 0;
  while(i < fileList.length) {
    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
    i += 1;
  }
  list += '</ul>'
  return list;
}

var app = http.createServer(function(request, response){
  // request : 요청할 때 웹 브라우저가 보낸 정보
  // response : 응답할 때 우리가 웹 브라우저한테 전송할 정보

  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  
  // 1-1. 쿼리 스트링을 통해 페이지를 요청했을 경우
  // (= pathname이 '/'일 경우)
  if (pathname === '/') {
    // 홈 화면이든 상세 페이지든 바로가기 링크는 필요하므로,
    // 일단 fileList를 읽어오고나서 본문 내용을 구성해보자.
    fs.readdir('./data', function(error, fileList) {
      // 2-1. 홈 화면을 요청했을 경우
      if (queryData.id === undefined) {
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(fileList);
          var template = templateHTML(title, list,
                                      `<h2>${title}</h2>${description}`,
                                      `<a href="/create">create</a>`
                                    );
          response.writeHead(200);
          response.end(template);
      // 2-2. 상세 페이지를 요청했을 경우 (id값을 선택했음)
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {
          var title = queryData.id;
          var list = templateList(fileList);
          var template = templateHTML(title, list,
                                      `<h2>${title}</h2>${description}`,
                                      `<a href="/create">create</a>
                                       <a href="/update?id=${title}">update</a>
                                       <form action="/delete_process" method="POST">
                                        <input type="hidden" name="id" value="${title}">
                                        <input type="submit" value="delete">
                                       </form>
                                      `
                                    );
          response.writeHead(200);
          response.end(template);
        });
      }
    });
  // 1-2. Path Name을 통해 페이지를 요청했을 경우
  } else if (pathname === '/create') {
    fs.readdir('./data', function(error, fileList) {
      var title = 'WEB - create';
      var list = templateList(fileList);
      var template = templateHTML(title, list, `
        <form action="/create_process" method="POST">
          <p>
            <input type="text" name="title" placeholder="title">
          </p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `, '');
      response.writeHead(200);
      response.end(template);
    });
  } else if (pathname === '/create_process') {
    var body = '';
    // 웹 브라우저가 POST 방식으로 데이터를 전송할 때
    // 데이터가 엄청나게 많으면, 데이터를 한 번에 처리하다간 문제가 발생할 수 있다.
    // Node.js에선 POST 데이터 전송량이 많을 경우를 대비하여 아래와 같은 사용방법을 제공한다.
    // 예를 들어 100만큼의 데이터가 있으면 조각조각의 양들을 서버 쪽에서 수신할 때마다 
    // 서버는 콜백함수를 호출하기로 약속되어 있다. data라는 인자를 통해서 수신한 정보를 주기로 약속되어 있다.
    request.on('data', function(data) {
      body += data;
    });
    // 조각조각 전송하다가 더이상 들어올 정보가 없으면 아래 함수를 실행한다.
    request.on('end', function() {
      var post = qs.parse(body);
      // console.log(post)
      //  [Object: null prototype] { title: 'Harry', description: 'Potter' }
      var title = post.title;
      var description = post.description;

      // writeFile(파일의 경로 및 이름, 파일에 들어갈 내용(데이터),
      //           인코딩 방식, 콜백함수)
      fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
        // 302: 페이지를 다른 페이지로 redirection 시켜라.
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      });
    });
  } else if(pathname ==='/update') {
    fs.readdir('./data', function(error, fileList) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        var title = queryData.id;
        var list = templateList(fileList);
        var template = templateHTML(title, list,
          `
          <form action="/update_process" method="POST">
            <!-- 사용자에게는 보이지 않지만, submit을 하면 id라는 이름으로 value 값이 전송될 것이다. -->
            <input type="hidden" name="id" value="${title}">
            <p>
              <input type="text" name="title" placeholder="title" value="${title}">
            </p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if(pathname === '/update_process') {
    var body = '';

    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      // 1. 파일 이름 수정
      fs.rename(`data/${id}`, `data/${title}`, function(error) {
        // 2. 파일 내용 수정
        fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
      });
    });
  } else if(pathname === '/delete_process') {
    var body = '';

    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      var post = qs.parse(body);
      var id = post.id;
      fs.unlink(`data/${id}`, function(error) {
        // 삭제가 끝나면 홈으로 보내버리자.
        response.writeHead(302, {Location: `/`});
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not found!');    
  };
});
app.listen(3000);