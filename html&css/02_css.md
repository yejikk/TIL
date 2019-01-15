# 190115 css

### css 기본 사용법

```html
h1{color:blue; font-size:15px}
# h1 : 셀렉터(selector)
# color: : 프로퍼티
# blue; : 값(value, 키워드 / 크기단위 / 색깔)
# font-size:15px; : 선언
```

## css 활용하기

### 1. inline

* HTML 요소의 style에 CSS 넣기

```html
<h1 style="color:blue">inline css 적용</h1>
```

### 2. Embedding(내부참조)

* HTML 내부에 CSS를 포함

```html
<style>
        h2 {
            color : blueviolet;
        }
</style>
<body>
	<h2>내부참조, embedding </h2>    
</body>
```

### 3. link file(외부참조)

* 외부에 있는 CSS 파일 로드하기

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h3>외부참조, 파일 link</h3>
</body>
```

## 크기 단위

#### 1. px

: px는 크기 단위로 디바이스별로 픽셀의 크기는 제각각이다.

#### 2. %

: `%`는 백분률 단위의 상대 단위이다.

  요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 결정한다.

#### 3. em	

: `em`은 배수 단위로 상대 단위이다. 

  요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.

  (em의 기준은 상속의 영향으로 바뀔 수 있다.)

#### 4. rem

:  `rem`은 최상위 요소(html)의 사이즈를 기준으로 삼는다.

   (rem의 r은 root를 의미한다.)

#### 5. Viewport 단위

: 디바이스마다 다른 크기의 화면을 가지고 있기 때문에 상대적인 단위인 viewport 기준     으로 만든 단위이다.

```html
<p class="vh">5vh</p>
<!-- 높이의 1/100 -->
<!-- display 높이에 따라서 변함 -->

<p class="vw">5vw</p>
<!-- 너비의 1/100 -->
<!-- display 너비에 따라서 변함 -->

<p class="vmin">10vmin</p>
<!-- 너비 또는 높이 중 작은 쪽의 1/100 -->
<!-- vmax는 너비 또는 높이 중 큰 쪽의 1/100 -->
```