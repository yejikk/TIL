# DAY3

## 1. Dictionary

Dictionary는 `key`와 `value`가 짝지어져있다.

key는 `string`, `integer`, `boolean` 가능하다. `list` 혹은 `dictionary` 는 안된다.

Value는 모든 자료형이 가능하다. `list` 혹은 `dictionary` 는 가능하다.

1) 딕셔너리 만들기

```shell
phonebook = {
    "중국집": "02"
}
phonebook = dict(중국집=01)
```

2) 딕셔너리 내용 추가하기

```shell
phonebook["분식집"] = "031"
```

3) 딕셔너리

```shell
idol = {
    "bts" : {
        "지민" : 24,
        "RM" : 25
    }
}
# 랩몬스터의 나이는?
idol["bts"]["RM"]
```

4) 딕셔너리 반복문 활용하기

```shell
# 기본 활용
for key in phonebook:
	print(key)
	print(phonebook[key])
	
# .items()
for key, value in phonebook.items():
	print(key, value)

# value만 가져오기
for value in phonebook.values():
	print(key)

# key 가져오기
for key in phonebook.keys():
	print(key)
```



## [연습문제](https://zzu.li/dj_dict1)

``` python
score = {
    "iu": {
        "수학": 80,
        "국어": 90,
        "음악": 100
    },
    "ui": {
        "수학": 80,
        "국어": 90,
        "음악": 100
    }
}

# 풀이
total_score = 0
length = 0
for person_score in score.values():
    for individaul_score in person_score.values():
        total_score += individaul_score
        length += 1

average_score = total_score / length
print(average_score)
```

## 텔레그램 API 활용하기

사전 준비사항 : @botfather를 통해서 봇을 만들어서 토큰 정보를 기록한다.

### 0. 봇 정보 가져오기

```python
f"https://api.telegram.org/bot{token}/getME"
```

```python
import requests
token = "토큰"
url = f"https://api.telegram.org/bot{token}/getME"
response = requests.get(url)
```



### 1. 메세지 보내기

(1) user의 'id'정보를 가져와야함.

``` python
http://api.telegram.org/bot{token}/getUpdates
```

``` python
import requests
# 1. 사용자 정보 가져오기 위한 요청
token = "토큰"
url = f"http://api.telegram.org/bot{token}/getUpdates"
response = requests.get(url).json()

# 2. 사용자 정보 및 메세지 설정
user_id = response["result"][0]["message"]["from"]["id"]
msg = "안녕?"

# 3. 메세지 보내기
send_url = f"https://api.telegram.org/bot{token}/sendMessage?text={msg}&chat_id={user_id}"
requests.get(url)
```



### !!주의사항

token은 반드시 외부에 공개되면 안된다.

따라서, 환경변수를 활용해서 내 컴퓨터에만 정보를 저장한다.

``` python
$ vi ~/.bash_profile
export TELEGRAM_TOKEN='토큰정보'
```

``` python
import os
token = os.getenv("TELEGRAM_TOKEN")
```