# XML - JSON 변환

* module

```python
from django.shortcuts import render
import datetime
from datetime import timedelta
import pprint
import json
import xmltodict
import urllib.parse
```



* xml - json 변환

```python
dt = datetime.datetime.now()
today = dt.strftime('%Y%m%d')
print(today)

key = 'Hn2Bu%2FNw%2B00vUgtA5oBe60RShwbZIFOCjS3U2vHT5jhsVSxQsWoijvN%2Fye%2B5uvwGdpPUIr4Pel20%2BCtSliwLRQ%3D%3D'
url = f'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde={today}&endde={today}&upkind=417000&numOfRows=1&ServiceKey={key}'
print(url)

# xml 형식 읽어오기
data = urllib.request.urlopen(url)
temp = data.read()
result = temp.decode('utf-8')

# xml -> json
dictData = xmltodict.parse(result)
jsonData = json.dumps(dictData)
resultData = json.loads(jsonData)

# resultData를 통해 totalCount 저장
totalCnt = resultData['response']['body']['totalCount']
# totalCnt = 5

totUrl = f'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde={today}&endde={today}&upkind=417000&numOfRows={totalCnt}&ServiceKey={key}'

# today 유기견 모든 정보 가져온 후 json으로 변환
totData = urllib.request.urlopen(totUrl)
td = totData.read()
totRes = td.decode('utf-8')

# 오늘 날짜 모든 유기견 data xml -> json 변환
dict_data = xmltodict.parse(totRes)
json_data = json.dumps(dict_data)
jsonRes = json.loads(json_data)
```



