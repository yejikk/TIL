# 190501 arrayHelperMethod

#### 1. forEach

> 배열을 반복하면서 출력한다.

```javascript
const avengers = ['캡틴아메리카', '토르', '헐크', '아이언맨', '블랙위도우', '앤트맨', '블랙팬서', '닥터스트레인지', '스파이더맨']

avengers.forEach(hero => console.log(hero))
```



#### 2. map

> **요소를 일괄적으로 변경**할 때 사용한다.
>
> 각각에 어떠한 것을 적용하고 싶을 때 사용한다.

```javascript
const numbers = [1, 2, 3]
// 각각의 요소를 integer -> string으로 적용
const strNumbers = numbers.map(number => String(number))
```

```javascript
const cal = [
    {'velocity': 40, 'time': 50},
    {'velocity': 100, 'time': 60},
    {'velocity': 20, 'time': 100},
]

const distances = cal.map(obj => obj.velocity * obj.time)
```



#### 3. filter

> true인 것만 모아서 return 한다.
>
> 원하는 것만 출력(적용)하고싶을 때 사용한다.

```javascript
const nums = [1, 5, 6, 8]
// 짝수인 것만 출력
const evenNum = nums.filter(num => num%2 === 0)
console.log(evenNum)
// 홀수인 것만 출력
const oddNum = nums.filter(num => num%2 !== 0)
console.log(oddNum)
```

* **filter + map 적용**

```javascript
const drinks = [
    {type: 'caffeine', name: 'cold brew'},
    {type: 'caffeine', name: 'green tea'},
    {type: 'juice', name: 'orange'},
    {type: 'juice', name: 'mango'},
]
const nonCaffeine = drinks.filter(obj => obj.type != 'caffeine').map(obj.name)
```



#### 4. reduce

> 결과 값을 하나로 하고 싶을 때 사용한다.

```javascript
const reduceNum = [1, 5, 6]
const reduceResult = reduceNum.reduce((result, num) => result += (num*10), 0)
console.log(reduceResult)
```



#### 5. find

> 특정한 요소를 찾고 싶을 때 사용한다.

```javascript
const dc = ['슈퍼맨', '배트맨', '조커']
const badguy = dc.find(name => name === '조커')
console.log(badguy)
```

