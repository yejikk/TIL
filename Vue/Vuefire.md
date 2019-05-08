Vuefire 

<https://github.com/vuejs/vuefire/tree/v1> 에서 install 찾아서 head닫는태그 위에 복사

```html
  <!-- Firebase -->
  <script src="https://gstatic.com/firebasejs/4.2.0/firebase.js"></script>
  <!-- VueFire -->
  <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
```

4.2.0 을 5.8.0으로 수정



문서로 이동 -> 웹 -> 

```html
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>
```

복사 후 apikey, databaseURL, projectID만 남겨두고 나머지 지운다.

톱니바퀴 > 프로젝트설정 > api키 복사, id, url 복사

최종

```html
<script>
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    const config = {
        apiKey: "AIzaSyAd6gaw9xJ6uHbrGtkCi2tPiRD-QPzqmRI",
        databaseURL: "https://vue-project-jsy.firebaseio.com/",
        projectId: "vue-project-jsy",
    };
    firebase.initializeApp(config);
    const db = firebase.database()
    </script>
```

위와같이 const db도 추가



script 내에서 STORAGE_KEY 키부터 주석처리

data 아래에 firebase추가

```javascript
firebase: {
                todoLists: db.ref('todoLists')
            },
```



데이터베이스에 추가했으니 삭제도 만들 수 있음

```javascript
deleteTodo: function(todo) {
                    // this.todoLists.splice(this.todoLists.indexOf(todo),1)
                    this.$firebaseRefs.todoLists.child(todo['.key']).remove()
                },
```



업데이트도 해보자

```javascript
updateTodo: function(todo) {
                    const copy ={...todo}
                    delete copy['.key']
                    this.$firebaseRefs.todoLists.child(todo['.key']).set(copy)
                },
```

```html
<input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)">
```





복사용 코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .completed {
            text-decoration: line-through;
            color: rosybrown;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- Firebase -->
    <script src="https://gstatic.com/firebasejs/5.8.0/firebase.js"></script>
    <!-- VueFire -->
    <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
    <script>
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        const config = {
            apiKey: "AIzaSyAd6gaw9xJ6uHbrGtkCi2tPiRD-QPzqmRI",
            databaseURL: "https://vue-project-jsy.firebaseio.com/",
            projectId: "vue-project-jsy",
        };
        firebase.initializeApp(config);
        const db = firebase.database()
    </script>
</head>
<body>
    <div id="app">
        <!-- v-model : data의 newTodo 값이 사용자가 입력하는 값으로 변경됨. -->
        <input type="text" v-model="newTodo" v-on:keyup.enter="addNewTodo"><br>
        {{ newTodo }}
        <button v-on:click="allCompleted">All completed</button>

        <select v-model="status">
            <option value="all">모두보기</option>
            <option value="completed">완료</option>
            <option value="active">할 일</option>
        </select>

        <ul>
            <!-- v-for가 우선, v-if가 나중 -->
            <li v-for="todo in todoListByStatus()" v-bind:key="todo.id">
                <!-- {{ todo.content }} <button v-on:click="check(todo)">[완료]</button> -->
                <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)">
                <span v-bind:class="{completed: todo.completed}">{{ todo.content }}</span>
                <button @click="deleteTodo(todo)">삭제</button>
            </li>
            <!-- <li v-else><span style="color:red"><del>{{ todo.content }} </del><button v-on:click="check(todo)">[취소]</button></span></li> -->

        </ul>
    </div>

    <script>
        // const STORAGE_KEY = 'vue-todo-list'
        // const todoStorage = {
        //     fetch: function() {
        //         return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        //         todoLIsts.forEach( function(todo, index){
        //             todo.id = index
        //         })
        //         return todoLists
        //     },
        //     save: function(todoLists) {
        //         localStorage.setItem(STORAGE_KEY, JSON.stringify(todoLists))
        //     }
        // }

        const app = new Vue({
            el : '#app',
            data : {
                newTodo:'',
                status: 'all',
                // todoLists: todoStorage.fetch()
            },
            firebase: {
                todoLists: db.ref('todoLists')
            },

            methods : {
                check : function(todo) {
                    todo.completed = !todo.completed
                },
                addNewTodo: function() {
                    // this : vue 오브젝트(app)
                    // this.todoList : data의 todoList
                    if (this.newTodo){
                        this.$firebaseRefs.todoLists.push({
                            // this.newTodo : data의 newTodo (사용자가 입력을 한 값)
                            id : new Date(),
                            content: this.newTodo,
                            completed: false
                        })
                        this.newTodo = ''
                    }
                },
                allCompleted: function() {
                    
                    this.todoLists.forEach(function(todo) {
                        todo.completed = true
                    })

                    // 방법1
                    // const notCompleted = this.todoLists.filter(function(todo){
                    //     return !todo.completed
                    // })
                    // console.log(notCompleted)
                    // notCompleted.forEach( todo => this.check(todo))

                    // 방법2
                    // this.todoLists.forEach(todo => {
                    //     if (!todo.completed){
                    //         this.check(todo)
                    //     }
                    // })
                
                    
                },
                todoListByStatus: function() {

                    if ( this.status === 'completed'){
                    // 각각 확인하면서 status가 completed라면,
                    // completed가 true만 리턴
                        return this.todoLists.filter((todo) => todo.completed)

                    } else if (this.status === 'active') {
                    // 각각을 확인하면서 status가 active라면,
                    // completed가 false인 것만 리턴
                        return this.todoLists.filter((todo) => !todo.completed)

                    } else {
                    // all 이면
                    // 고대로 리턴
                        return this.todoLists
                    }


                },
                deleteTodo: function(todo) {
                    // this.todoLists.splice(this.todoLists.indexOf(todo),1)
                    this.$firebaseRefs.todoLists.child(todo['.key']).remove()
                },
                updateTodo: function(todo) {
                    const copy ={...todo}
                    delete copy['.key']
                    this.$firebaseRefs.todoLists.child(todo['.key']).set(copy)
                },
            }
            , watch: {
                todoLists: {
                    handler: function() {
                        todoStorage.save(this.todoLists)
                        // 로칼 스토리지에 저장하겠습니다.
                    },
                    deep:true
                    // deep true가 없다면, 단순히 해당하는 오브젝트 ([])에 값이 추가되거나 삭제 되는 경우만 watch
                    // deep true 옵션을 통해 오브젝트([]) 안에 있는 오브젝트(nested object)의 변경 사항까지 watch
                    
                    
                }
            }
        })
    </script>
</body>
</html>
```

