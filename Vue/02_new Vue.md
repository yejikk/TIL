# new Vue

> new Vue로 새로운 Vue 인스턴스를 만들어보고, 속성들을 알아보자.



## 1. data

* Vue 인스턴스는 `data` 객체 안에 있는 모든 속성을 동기화 한다.
* `data`에 있는 속성들은 인스턴스가 생성될 때 존재하는 것들만 반응한다.
  * 만약, 갑자기 기존 `data`에 있는 속성에 무언가를 추가한다면 갱신되지 않는다.
* `{{ }}`표현식을 사용하여 data값을 나타낼 수 있다.

```html
<div id="app">
	{{ message }} - {{ count }}
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  // View Model
  const app = new Vue ({
    // element 하나를 vue랑 연결시킴
    // Vue와 element를 연결해서 app이 관리를 해준다.
    // Vue에서 data를 넘겨서 사용한다.
    // element: 살제 Vue와 연결할 element
    el: '#app',
    // app(Vue 인스턴스)의 속성을 가지게 된다.
    // {{ }}을 사용하여 나타낼 수 있다.
    data: {
      message: 'Hello, Vue!',
      count: 0
    }
  })
</script>
```



## 2. methods

* `Event Handler`를 나타낸다.
* **Event**가 발생했을 시, 발생하는 화면 변화를 나타낸다.
  * 마우스 Event, 키보드 Event 등과 같은 Event를 조작한다.
* `v-on: + event = method` 또는 `@ + event = method`로 나타낼 수 있다.

```html
<div id="app">
  <!-- 메서드 -->
  <button v-on:click="plus">Count증가!!!</button>
	{{ message }} - {{ count }}
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  const app = new Vue ({
    el: '#app',
    data: {
      message: 'Hello, Vue!',
      count: 0
    },
    methods: {
      plus: function() {
        this.count ++ 
      }
    }
  })
</script>
```



## 3. created / mounted

> 03_Life_Cycle 참고

1. `created`

   * 인스턴스가 작성된 후 동기적으로 호출된다. 이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료한다. 
   * 마운트가 시작되지 않았으므로 `$el` 속성을 아직 사용할 수 없다.

   ```javascript
   var app = new Vue({
       el: '#app',
       data() {
           return {
               msg: 'hello';
           }
       },
       created(function() {
           console.log(this.msg); // hello
       })
   })
   ```

2. `mounted`

   * `el`이 새로 생성된 `vm.$el`로 대체된 인스턴스가 마운트 된 직후 호출된다. 
   * 루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, `mounted`가 호출 될 때 `vm.$el`도 문서 안에 있게 됩니다.

   ```javascript
   var app = new Vue({
       el: '#app',
       mounted(function() {
           this.$nextTick(function() {
               // 모든 화면이 렌더링된 후 실행
           })
       })
   })
   ```

   

3. `created`와 `mounted` 차이점?

   * **created는 데이터 초기화에 대한 목적**
   * **mounted는 DOM 조작에 대한 목적**



## 4. computed / watch

1. `computed` - 계산된 속성
   * `return`되는 값으로 무엇을 나타낼지 선언하는 선언형 프로그래밍 방식이다.
   * `data` 속성에 변화가 있을때 자동으로 다시 연산을 하고, 캐싱을 해놓았다가 필요한 부분에 재사용한다.
   * `computed`는 내장 api를 사용하는 간단한 연산정도에 적합하다.
     * 호출완료까지 긴 시간이 필요하다면 `computed`가 아닌 `watch`에 적합하다.
2. `watch` - 감시자
   * 감시할 데이터를 지정하고 그 데이터가 바뀌면 어떠한 함수를 실행하라는 방식의명령형 프로그래밍 방식이다.
   * 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 `비동기 처리`에 적합하다.
3. `computed`와 `watch`의 차이점?
   * `watch`를 사용하면, API를 호출하고 그 결과에 대한 응답을 받기 전까지 중간 상태를 설정할 수 있다.
   * `computed`는 API 호출 결과를 기다리는 동안에 중간 상태를 설정할 수 없다.



