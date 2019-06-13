# 11. 글 생성 UI 만들기와 POST 방식으로 전송된 데이터 받기

> 글 작성을 할 수 있는 UI 구현하기
>
> POST 방식으로 전송된 데이터를 받아서 파일로 저장하는 방법에 대해서 알아보긴



## 1) 글 작성 UI 만들기

1. **templateHTML**

   * 글 작성할 수 있는 page로 이동하기 위하여 링크 추가해주기

   ```javascript
   function templateHTML(title, list, body) {
       // 반복되는 부분을 짤라 return 값으로 넣어주었다.
       return `
       <!doctype html>
       <html>
       <head>
           <title>WEB1 - ${title}</title>
           <meta charset="utf-8">
       </head>
       <body>
           <h1><a href="/">WEB</a></h1>
           ${list}
           <a href="/create">create</a>
           ${body}
       </body>
       </html>
   `
   }
   ```


2. **`/create`로 이동하였을 때, 글 작성 form 보여주기**

   * `pathname === '/create'` 일 때, 

   ```javascript
   else if(pathname === '/create') {
           fs.readdir('./data', function(error, filelist){
               var title = 'Web - create';
               var description = 'Hello, Node.js';
               var list = templateList(filelist);
               var template = templateHTML(title, list,`
                   <form action="http://localhost:3000/process_create" method="post">
                   <p><input type="text" name="title" placeholder="title"></p>
                   <p>
                       <textarea name="description" placeholder="description"></textarea>
                   </p>
                   <p>
                       <input type="submit">
                   </p>
                   </form>
               `)
               response.writeHead(200);
               response.end(template);
           
           })
   
       }
   ```

   ![](C:\Users\kig95\Desktop\SSAFY\TIL\image\create.png)



# 2) POST 방식으로 전송된 데이터 받기

* `main.js`

  *  request는 createServer에서 호출된 callback함수의 인자 즉, 요청보낸 정보들이다.
  * `request.on('data', function(data) {})`
    * node.js에서 post 방식으로 보내는 data가 많을 때를 대비하여 사용하는 방법이다.
    * data라는 인자를 통해서 수신한 data를 받기로 약속한다.
    * callback 함수가 실행될 때마다 body에 data를 추가한다.
  * `request.on('end', function() {})`
    * 더이상 들어올 data가 없다면, post 변수에 들어온 data를 parse하여 저장한다.
    * 데이터가 저장되어있는 post를 사용하여 post 방식으로 전송된 `title`과 `description`을 각각의 변수에 저장한다.
  * 이 과정을 통해 전송된 데이터를 받을 수 있다.

  ```javascript
  else if(pathname === '/create_process'){
          var body = '';
          request.on('data', function(data){
              body = body + data
          });
          request.on('end',function(){
              var post = qs.parse(body);
              var title = post.title;
              var description = post.description;
          });
          response.writeHead(200);
          response.end('success');
      } 
  ```
