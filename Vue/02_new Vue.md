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

1. `created`
   * 인스턴스가 작성된 후 동기적으로 호출된다. 이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료한다. 
   * 마운트가 시작되지 않았으므로 `$el` 속성을 아직 사용할 수 없다.
2. `mounted`
   * `el`이 새로 생성된 `vm.$el`로 대체된 인스턴스가 마운트 된 직후 호출된다. 
   * 루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, `mounted`가 호출 될 때 `vm.$el`도 문서 안에 있게 됩니다.
3. `created`와 `mounted` 차이점?
   * **created는 데이터 초기화에 대한 목적**
   * **mounted는 DOM 조작에 대한 목적**



## 4. watch / computed

1. `watch`
2. `computed`
3. `watch`와 `computed`의 차이점?



