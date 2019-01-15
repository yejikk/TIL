# 190114 html

#### * title

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

#### * h1 ~ h6 : 글씨 크기 조절

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

#### * del (취소선) mark(하이라이팅)

```html
<!-- del : 취소선 -->
<del></del>

<!-- mark : 글씨에 형광색 하이라이팅 -->
<mark></mark>
```

#### * br & hr

```html
<!-- br 태그 : 강제 줄바꿈 -->
<br>
<!-- hr 태그 : 수평선 그리기 -->
<hr>
```

#### * p 

```html
<!-- p tag는 하나의 문단을 의미한다. -->
<p>첫번째 문단(paragraph)</p>
<p>두번째 문단(paragraph)</p>
<!-- 결과:
첫번째 문단(paragraph)
두번째 문단(paragraph) -->
```

#### * pre

```html
<!-- 그대로 출력됨 -->
<pre>
	import random
    random.sample(range(1, 46), 6)
    띄          어          쓰          기
</pre>
```

#### * q

```html
<!-- q : 따옴표가 붙여서 출력됨 (인용문) -->
<q>안녕하세요</q>
<!-- "안녕하세요" -->
```

#### * blockquote

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

#### * ol & li

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

#### * a 

```html
<!-- a tag: 문서를 연결한다. -->

<a href="https://google.com" target="_blank">새창에서 구글로 가기</a>
<a href="https://google.com" target="_self">여기에서 구글로 가기</a>
```

* `a href` 속성 : 연결할 주소를 지정한다. 
* `a target` 속성 : 링크를 클릭 할 때 창을 어떻게 열지 결정한다.

#### * table : 표 만들기

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

#### * form : 웹 페이지 입력 양식

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

#### * 동영상 삽입

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/cn5INUYoXP4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- youtube - 퍼가기 - 복사 -->
```





