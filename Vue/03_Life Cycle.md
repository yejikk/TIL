# Vue Life Cycle



## Life Cycle 이란?

* Vue 인스턴스 혹은 컴포넌트가 생성될 때, 우리 눈에 보여지고 사라지는 과정들을 말한다.
* 크게 4가지 과정으로 나뉘게 된다.
  * 생성`create` -> DOM에 부착 `mount` -> 업데이트 `update` -> 소멸`destroy` 
* 일반적으로 많이 사용하는 종류로는 `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeDestroy`, `destroyed`가 있다.

![lifecycle](https://user-images.githubusercontent.com/45961217/71725441-3bf32d80-2e77-11ea-9dd0-27ada1242427.png)



## 1. beforeCreated

* `Vue 인스턴스`가 초기화된 직후에 발생된다.
* `component`가 **DOM**에 추가되기 전이어서 `this.$el`에 접근할 수 없다.
  * 마찬가지로 `data`, `methods`에도 접근할 수 없다.

```javascript
var app = new Vue({
    el: '#app',
    data() {
        return {
            msg: 'hello';
        }
    },
    beforeCreate(function() {
        console.log(this.msg); // undefined
    })
})
```



## 2. created

* **created**는 `data`, `methods`, `computed`, `watch`등이 활성화되어 접근이 가능하지만 아직은 **DOM**에 추가되기 전의 상태이다.
* `data`에는 접근이 가능하므로 `component`초기에 외부에서 받아온 값들로 `data`를 세팅해야하거나 이벤트 리스너를 선언해야 한다면 **created**단계에서 하는 것이 가장 적절하다.

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



## 3. beforeMount

* **DOM**에 부착되기 직전에 호출된다.
* template이 있는지 없는지 확인후 렌더링한 상태로 **가상** **DOM**이 생성되어 있으나 **실제** **DOM**에는 부착되지 않은 상태이다.

```javascript
var app = new Vue({
    el: '#app',
    beforeMount(function() {
        console.log('beforeMount');
    })
})
```



## 4. mounted

* 일반적으로 가장 많이 사용한다.
* **가상 DOM**의 내용이 **실제 DOM**에 부착되고 난 이후에 실행되므로, `this.$el`을 비롯한 `data, computed, methods, watch` 등 모든 요소에 접근이 가능하다.
* 부모와 자식 `component` 간의  **mounted** 순서이다.
  * `부모 component`의 **mounted**는 항상 `자식 component`의 **mounted**이후에 발생한다.

![mounted](https://user-images.githubusercontent.com/45961217/71726899-da818d80-2e7b-11ea-9c5c-89719f021744.png)

* 하지만 자식 컴포넌트가 서버에서 비동기로 데이터를 받아오는 경우와 같이 `부모의 mounted`가 모든 `자식 mounted` 상태를 보장하지는 않는다.
* 이 때, `this.$nextTick`을 이용한다면, 모든 화면이 렌더링 된 이후에 실행되므로 **mounted** 상태를 보장할 수 있다.

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



## 5. beforeUpdate

* component에 사용되는 `data`의 값이 변해 **DOM**에 그 값을 적용시켜야 할 때 변화 직전에 호출되는 것이다.
* `변할 값`을 이용하여 **가상 DOM**을 렌더링하기 전이지만, 이 값을 이용하여 작업할 수는 있다.
* 값들을 추가적으로 변화시키더라도 렌더링을 추가적으로 호출하지는 않는다.

```javascript
var app = new Vue({
    el: '#app',
    beforeUpdate(function() {
        console.log('beforeUpdate');
    })
})
```



## 6. updated

* 가상 DOM을 렌더링 하고 **실제 DOM**이 변경된 이후에 호출된다. 
* 변경된 `data`가 DOM에 적용된 상태이다. 만약, 변경된 값들을 DOM을 이용해 접근하고 싶다면, **updated**가 가장 적절하다.
* **updated**에서 `data`를 변경하는 것은 무한 루프를 일으킬수 있기 때문에 **updated**에서 `data`를 직접 바꾸어서는 안된다.
* `mounted`와 마찬가지로, `this.$nextTick`을 이용하여 모든 화면이 업데이트 된 이후의 상태를 보장할 수 있다.

```javascript
var app = new Vue({
    el: '#app',
    updated(function() {
        console.log('beforeUpdate');
    })
})
```



## 7. beforeDestroy

* 인스턴스가 해체되기 직전에 **beforeDestroy**이 호출된다.
* 아직 해체되기 이전이기 때문에 인스턴스는 완전하게 작동한다. 이로 인해 모든 속성에 접근이 가능하다.
* **beforeDestroy**에서는 이벤트 리스너를 해제하는 등 인스턴스가 사라지기 전에 해야할 일들을 처리한다.

```javascript
var app = new Vue({
    el: '#app',
    beforeDestroy(function() {
        console.log('beforeDestroy');
    })
})
```



## 8. destroyed

* 인스턴스가 해체되고 난 직후에 **destroyed**이 호출된다.
* 해체가 끝난 이후기 때문에, 인스턴스 속성에 접근할 수 없다.
* 하위 인스턴스 또한 삭제된다.

```javascript
var app = new Vue({
    el: '#app',
    destroyed(function() {
        console.log('destroyed');
    })
})
```



> [Vue 라이프 사이클이해하기](https://wormwlrm.github.io/2018/12/29/Understanding-Vue-Lifecycle-hooks.html)를 참고하여 03_Life_Cycle을 작성