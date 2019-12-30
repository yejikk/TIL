# 07_ Javascript Scope



## Scope란?

* 어떤 변수에 접근할 수 있는지 정의하는 것
* Scope는 **전역 스코프**와 **지역 스코프**로 나뉜다.



## 전역 스코프

* **변수**가 `함수`밖이나 `{}`밖에 선언되었다면 **전역 스코프**에 정의된다.

```javascript
const globalScope = 'Global Scope'
function scopeTest(){
  console.log(globalScope)
}

console.log(globalScope) // 'Global Scope'
scopeTest() // 'Global Scope'
```



## 지역 스코프

1. **함수 스코프**

   * 변수가 `함수 내부`에 선언되었다면 **함수 스코프**에 정의된다.

   ```javascript
   function scopeTest() {
     const functionScope = 'Function Scope'
     console.log(functionScope)
   }
   
   console.log(functionScope) // Error, functionScope is not defined
   scopeTest() // 'Function Scope'
   ```

   

2. **블록 스코프**

   * 변수가 `{} 내부`에 선언되었다면 **블록 스코프**에 정의된다.

   ```javascript
   {
     const blockScope = 'Block Scope'
     console.log(blockScope) // 'Block Scope'
   }
   
   console.log(blockScope) // Error, blockScope is not defined
   ```

