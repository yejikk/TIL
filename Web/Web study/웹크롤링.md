# 웹 크롤링

> 웹 사이트의 데이터를 가져오기 위해 웹 크롤링을 한다.

```bash
$ pip install requests
$ pip install beautifulsoup4
```



## BeautifulSoup

> HTML / XML을 파싱하기 위한 python 라이브러리

```python
url = 'http://www.animal.go.kr/portal_rnl/map/mapInfo2.jsp?s_date=&e_date=&s_upr_cd=&s_org_cd=&s_up_kind_cd=&s_kind_cd=&s_name=&pagecnt=1'
req = requests.get(url).text
soup = BeautifulSoup(req, 'html.parser')
```

* url에 requests를 통해 요청을 보낸 후 이를 text로 저장하고 BeatifulSoup을 통해 파싱을 한다.