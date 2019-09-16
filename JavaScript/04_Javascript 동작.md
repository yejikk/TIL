# Javascript 동작



* `call stack `: 모두 들어있는데 이벤트 관련된 것이라면 이벤트 큐에 저장한다.

* `event loop` : 이벤트가 발생하면 이벤트큐에서 꺼내와서 실행시킨다.

* `event(callback) queue` : 이벤트들만 들어있는 큐

* `promise` : 데이터를 넣어줄것이라는 약속

* 디펜던시가 없으면 밖에 빼서 돌려주고 ,아니면 안에서 돌려줘야함

```javascript
// const dogImageUrl = axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.data.message)
//     .then(url => console.log(1))
// console.log(2)
// console.log(dogImageUrl)
// console.log(3)
const dogUrl = axios.get('https://dog.ceo/api/breeds/image/random')
.then(response => response.data.message)
.then(url => {
  console.log(2)
  console.log(url)
  return url
})
.then(() => console.log(3))
console.log(1)
console.log(dogUrl)

```

