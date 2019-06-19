## [firebase](<https://firebase.google.com/?hl=ko>)

목표 : 데이터가 저장하는 데이터베이스를 클라우드 서비스를 통해서 저장해보기

key - value로 저장

[vuefire](<https://github.com/vuejs/vuefire/tree/v1>)

```html
<head>
    <!-- Firebase -->
    <script src="https://gstatic.com/firebasejs/5.8.0/firebase.js"></script>
    <!-- VueFire -->
    <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
    <script>
      // Initialize Firebase
      // TODO: Replace with your project's customized code snippet
      var config = {
        apiKey: "프로젝트 설정에 웹 API키",
        databaseURL: "https://vue-project-ming.firebaseio.com/",
          // 데이터베이스 url복사 붙여넣기
        projectId: "vue-project-ming",
          // url의 firebase앞에 있는 게 Id
      };
      firebase.initializeApp(config);
        const db = firebase.batabase()
        // db 초기화
    </script>
</head>
```



* todo List 추가

  ```js
  addNewTodo: function(){
      // this : vue object(app)
      // this.todoList : data의 todoList
      if (this.newTodo) {
          this.$firebaseRefs.todoList.push({
              // 아이템을 array에 추가하는 방법
              id: new Date(),
              content: this.newTodo,
              completed: false
          })
          this.newTodo=''
      }
  },
  ```

* todo List 삭제

  ```js
  deleteTodo: function(todo) {
  	this.$firebaseRefs.todoList.child(todo['.key']).remove()
  },
  ```



## chat기능 구현

* 시작하기

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <!-- Firebase -->
      <script src="https://gstatic.com/firebasejs/5.8.0/firebase.js"></script>
      <!-- VueFire -->
      <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
      <script>
          // Initialize Firebase
          // TODO: Replace with your project's customized code snippet
          const config = {
              apiKey: "AIzaSyCN2gdVAlGKwfKiLJiapk9z9g43nlDc7Os",
              databaseURL: "https://vue-project-ming.firebaseio.com/",
              projectId: "vue-project-ming",
          };
          firebase.initializeApp(config);
          // db 초기화
          const db = firebase.database()
      </script>
  </head>
  <body>
      <div id="app">
  
      </div>
  
      
      <script>
      const app = new Vue({
          el: '#app'
  
      })    
      </script>
  </body>
  </html>
  ```
