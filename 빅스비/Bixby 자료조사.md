# Bixby 자료조사

> 방탄소년단을 중심으로 조사



## 1. 시장조사

1. #### 네이버 데이터랩

   ![](C:\Users\kig95\Desktop\bixby\image\방탄소년단사진검색.png)

   * `방탄소년단 사진`을 조회했을 때 꾸준히 검색했다는 결과를 볼 수 있음



   2. #### 방탄소년단 컴백일 급상승 검색어

![](C:\Users\kig95\Desktop\bixby\image\방탄컴백.png)

* 컴백 당일 급상승 검색어 조회

   * 아이돌 컴백일이나 뮤비 공개날에 검색 양이 증가하며 이에 따른 이미지 검색도 많을 것이라고 예상할 수 있음



3. #### 날짜 + 아이돌 그룹명 검색창 (구글)

![](C:\Users\kig95\Desktop\bixby\image\아이돌검색2.png)

![](C:\Users\kig95\Desktop\bixby\image\아이돌검색.png)



4. #### 날짜 + 아이돌 그룹명 검색 (구글)

![](C:\Users\kig95\Desktop\bixby\image\방탄소년단1.png)

![](C:\Users\kig95\Desktop\bixby\image\방탄소년단2.png)

* 매일매일 꾸준히 사진이 업로드 되고 있음



![](C:\Users\kig95\Desktop\bixby\image\0508방탄.png)

* 활발하게 활동을 하지 않는 시기임에도 업로드 되고 있음
* 그만큼 수요가 많다고 볼 수 있음



5. #### 멤버 2명 & 날짜 + 멤버 2명

![](C:\Users\kig95\Desktop\bixby\image\멤버2명.png)

![](C:\Users\kig95\Desktop\bixby\image\방탄2명.png)

* 검색 결과가 많기 때문에 기능에 추가해도 좋을 것으로 보임



## API 조사

1. #### Google Custom Search API

   * 현재 이미지만 검색하여 결과를 보여주는 Google Image API는 사용 중단
   * 크롤링을 하는 방법도 있지만 구글에서 검색 결과를 보여주는 것을 자산?이라고 생각해서 많은 양의 이미지를 크롤링할시에 IP추적을 해서 차단한다고 합니다.
   * Google Custom Search API는 검색을 하면 JSON형태로 응답이 와서 여기서 뽑아서 사용해야할 것 같습니다.
   * Google이 이미지가 가장 많음



2. #### Bing Image Search API

   * Bing Image Search API에서 이미지 전용 검색 결과를 제공	
   * Google보다 고화질 사진이 많다. (양에 비해 고화질 사진이 많음)
   * API 설명이 잘되어있고 python 설명서가 따로 있음
   * 하지만 구글에 비해서 사진의 양이 많지 않고, 멤버 2명을 쳤을 때 검색 결과가 좋지는 않습니다.
   * 구글 API 사용이 적절하지 못할시에 사용하는 것이 좋을 것 같습니다.



3. #### 네이버 검색 API - 이미지

   * 네이버 이미지 검색 결과를 출력해주는 REST API



4. #### MRISA

   * MRISA (Meta Reverse Image Search API)는 이미지 URL을 가져 와서 역 Google 이미지 검색을 수행하고 검색 결과가 포함 된 JSON 배열을 반환하는 RESTful API이다.
   * 사진을 보는 것뿐만아니라 사진에 대한 정보를 얻을 수 있게 제공하는 기능을 추가했을 때 사용할 수 있는 API



## 문제점

1. 저작권 문제
2. 어떻게 이미지를 보여줄 수 있을지
3. 저장 기능? 추가해야할지