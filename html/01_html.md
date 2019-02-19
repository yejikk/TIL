# 190114 HTML

* ### HTML : H**yper **T**ext **M**arkup **Language

  * WEB page를 작성하기 위한 역할 표시 언어
  * Hyper Text를 주고 받는 규칙
    - **H**yper **T**ext **T**ransfer **P**rotocol =  **HTTP**
  * HTML 파일 : HTML로 작성된 문서파일



## 1. HTML 문서의 기본 구조

```html
<!DOCTYPE html> <!-- DOCTYPE선언부 : 사용하는 문서의 종류를 선언 -->
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML</title>
    </head>
 	<body>
    </body>
</html>
```

* **html 요소**
  * HTML 문서의 최상위 요소로 문서의 root를 뜻한다. 
  * head와 body 부분으로 구분된다.
    * `head`
      * 문서 제목, 문자코드(인코딩, UTF-8)와 같이 해당 문서 정보를 담고 있으며, 브라우저에 나타나지 않는다.
      * CSS(style 대신 쓰며, 꾸미는 역할) 선언 혹은 외부 로딩 파일 지정 등을 작성한다.
      * og와 같은 메타태그 선언이 이뤄진다.
    * `body`
      * 브라우저 화면에 나타나는 정보로 실제 내용에 해당한다.



## 2. Tag와 DOM(Document Object Model) Tree

* ### 요소(Element)

  * HTML의 element는 **태그(Tag)**와 **내용(Content)**으로 구성되어 있다.

  ```html
  <h1>웹 문서</h1>
  ```

  * 태그는 소문자로 작성한다.
  * 여는 시작 태그와 닫는 종료 태그가 존재한다.
  * 요소간의 중첩도 가능하다.

* ### self-closing element

  * 닫는 태그가 없는 태그도 존재한다.

  ```html
  <img src="url"/>
  ```

* ### 속성(Attribute)

  * 태그에는 **속성**이 지정될 수 있다.

  ```html
  <a href='google.com'/>
  ```

  * `href`는 지정된 url로 이동하는 속성이다.
  * `id`, `class`, `style` 속성은 태그와 상관없이 모두 사용 가능하다.

* ### DOM트리

  * 태그는 중첩되어 사용가능하며, **부모-자식 관계** 또는 **형제 관계** 등을 갖는다.

  ```html
  <body>
      <h1>웹 문서</h1>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
      </ul>
  </body>
  ```

  * `body` 태그와 `h1`태그는 부모-자식 관계이다.
  * `ul`태그와 `li`태그는 부모-자식 관계이다.
  * `li` 태그끼리는 형제 관계이다.
  * `h1`태그와 `ul`태그는 형제 관계이다.

* ### 시맨틱태그

  * 내용(contents)의 **의미를 설명하는 태그** (의미를 가지는 Tag라고 할 수 있다.)

  * HTML5에 새롭게 추가된 시맨틱 태그

    * non-semantic tag(ex. div, span)로 사용할 수 있지만 사용자에 따라 이름을 다르게 지어서 html 파일을 해석할 때 혼란이 올 수 있다. 그렇기 때문에 시맨틱 태그는 의미를 가지고 있어 혼란을 방지할 수 있는 큰 장점을 가지고 있다. 

      | 태그    | 설명                                                         |
      | ------- | ------------------------------------------------------------ |
      | header  | 헤더(문서 전체나 section의 헤더)                             |
      | nav     | 내비게이션                                                   |
      | aside   | 사이드에 위치한 공간으로, 메인 콘텐츠와 관련성이 적은 콘텐츠 |
      | section | 문서의 일반적인 구분으로 컨텐츠의 그룹을 표현하며, 일반적으로 h1~h6 요소를 가진다. |
      | article | 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역 (포럼/신문 등의 글 또는 기사) |
      | footer  | 푸터 (문서 전체나 섹션의 푸터)                               |

  * 개발자 및 사용자 뿐만 아니라 검색엔진(구글, 네이버) 등에 의미있는 정보의 그룹을 태그로 표현하여 단순히 보여주기 위한 것을 넘어서 의미를 가지는 태그들을 활용하기 위한 노력이다.



## HTML head & body

* ### title

```html
<head>
    <title>Tab에 띄울 글씨</title>
    <style>
        body {
            height: 10000px; <--! 스크롤을 만듬. -->
        }
        table, tr, td{
            border: 1px solid yellow <!-- 표 색깔 정함. -->
        }
    </style>
</head>
```



* ### h1 ~ h6 : 글씨 크기 조절

```html
<!-- 글씨 크기를 지정해줌. -->
<!-- 글씨 크기는 h6까지 있음. -->
<body>
    <h1></h1>
</body>

<!-- strong : bold 체 -->
<strong></strong>

<!-- em : 이탤릭체 (글자 기울기) -->
<em></em>
```



* ### del (취소선) mark(하이라이팅)

```html
<!-- del : 취소선 -->
<del></del>

<!-- mark : 글씨에 형광색 하이라이팅 -->
<mark></mark>
```



* ### br & hr 

```html
<!-- br 태그 : 강제 줄바꿈 -->
<br>
<!-- hr 태그 : 수평선 그리기 -->
<hr>
```



* ### p 

```html
<!-- p tag는 하나의 문단을 의미한다. -->
<p>첫번째 문단(paragraph)</p>
<p>두번째 문단(paragraph)</p>
<!-- 결과:
첫번째 문단(paragraph)
두번째 문단(paragraph) -->
```



* ### pre 

```html
<!-- 그대로 출력됨 -->
<pre>
	import random
    random.sample(range(1, 46), 6)
    띄          어          쓰          기
</pre>
```



* ### q

```html
<!-- q : 따옴표가 붙여서 출력됨 (인용문) -->
<q>안녕하세요</q>
<!-- "안녕하세요" -->
```



* ### blockquote

```html
<blockquote>
    인용문이지만, 긴 문장입니다.
    아마도 들여쓰기가 기본적으로 적용됩니다.
</blockquote>
```

#### * ul & li

```html
<!-- ul은 순서가 없으며 동그라미, 
네모와 같은 도형을 인덱스로 나타낸다. -->
<ul>
	<li>순서가 없습니다.</li>
    <li style="list-style-type: square">김예지</li>
    <li>박성민</li>
    <!-- li는 list를 나타낸다. -->
</ul>

<!-- ul>li*(필요한 갯수)로도 나타낼 수 있다.-->
<!-- style="list-style-type: square", style="list-style-type: circle"을 넣어주면 모양을 선택할 수 있다.-->
```



* ### ol & li

```html
<!-- reversed(index 거꾸로), start=""(시작번호), type="a" 알파벳 소문자로 인덱스 시작.-->
<!-- ol은 순서가 있다. -->
<ol type="a" start="2">
    <li>1교시</li>
    <li>2교시</li>
    <li>3교시</li>
    <li>4교시</li>
    <li>5교시</li>
    <li>6교시</li>
    <li>7교시</li>
    <li>8교시</li>
    <!-- li안에 value 값을 넣으면 거기서부터 인덱스 값이 시작됨. ! -->
</ol>
```



* ### a 

```html
<!-- a tag: 문서를 연결한다. -->

<a href="https://google.com" target="_blank">새창에서 구글로 가기</a>
<a href="https://google.com" target="_self">여기에서 구글로 가기</a>
```

* `a href` 속성 : 연결할 주소를 지정한다. 
* `a target` 속성 : 링크를 클릭 할 때 창을 어떻게 열지 결정한다.



* ### table : 표 만들기

```html
<table>
    <tr>
        <th colspan="2">표 실습</th>
        <!-- <th>숫자</th> -->
        <!-- tabel heading 부분 (bold체로 되어져있음) -->
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td colspan="2">1</td>
        <!-- colspan 원하는 칸만큼 차지할 수 있음 -->
    </tr>
    <tr>
        <td rowspan="2">2</td>
        <td>2</td>
    </tr>
    <tr>
        <td>2</td>
    </tr>
    <!-- tr은 행의 갯수, td는 열의 갯수 -->
    <!-- td : table data -->
</table>
```



* ### form : 웹 페이지 입력 양식

```html
<form action="#">
    일반 텍스트 : <input name="username" 		        type="texts"placeholder="이름을 입력해주세요." autofocus><br>
<!-- autofocus는 새로고침을 누르거나 새로 들어가면 그쪽으로 바로 이동한다. -->
    이메일 : <input type="email" placeholder="이메일을 입력해주세요"  autocomplete="email"><br>
<!-- 다른 브라우저에 저장되있는 것을 자동완성으로 만들어줌 -->
    비밀번호 : <input type="password" placeholder="비밀번호 입력"><br>
    날짜 : <input type="date">
    <input type="hidden" value="안녕">
    <input type="submit" value="전송!"><br>

    <!-- radio button -->
    <!-- radio 버튼은 여러가지 중에 한가지만 선택 할 수 있다. -->
    <!-- value는 값(선택한 값)이 name으로 넘어간다. 
		gender : female -->
    <!-- checked를 하면 선택되어있었던 것이 남아있음 -->
    <input type="radio" name="gender" value="male"> 남자
    <input type="radio" name="gender" value="female" checked> 여자<br>

    <!-- checkbox -->
    <!-- checkbox는 여러개를 선택할 수 있다. value : (1, 2) -->
    <input type="checkbox" name="option" value="1">SIA<br>
    <input type="checkbox" name="option" value="2">QUEEN<br>
    <input type="checkbox" name="option" value="3">뜨또<br>

    <!-- dropdown -->
    <select name="country">
        <option value="korea" selected>한국</option>
        <option value="japan" disabled>일본</option>
        <option value="china">중국</option>
    </select>
    <br>
    <input name="number" type="range" min="0" max="100">
</form>
```

* `form` : 전체 양식
  * `name` : form의 이름

  * `action` : form 데이터가 전송되는 백엔드 url

* `input` : 실제로 사용자가 양식을 입력하기 위한 tag



* ### 동영상 삽입

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/cn5INUYoXP4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- youtube - 퍼가기 - 복사 -->
```
