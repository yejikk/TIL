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

  요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈=(16px))에 상대적인 사이즈를 설정한다.

  (em의 기준은 상속의 영향으로 바뀔 수 있다.)

#### 4. rem

:  `rem`은 최상위 요소(html)의 사이즈를 기준으로 삼는다.

   (rem의 r은 root를 의미한다.)

#### 5. Viewport 단위

: 디바이스마다 다른 크기의 화면을 가지고 있기 때문에 상대적인 단위인 viewport 기준으로 만든 단위이다.

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



## 색상 표현 단위

#### 1. HEX : # ffffff

#### 2. RGB : rgb(0, 0, 0) (red, green, blue 기준)

#### 3. RGBA : rgb(0, 0, 0, 0.5)



## selector(선택자)와 우선순위

* #### selector(선택자)

  * `class` : . 으로 나타냄

    ```html
    <h2 class="pink">클래스 선택자</h2>
    ```

    ```css
    .pink{
        color: pink;
    }
    /* class가 pink인 것을 선택하겠다. class선택자 */
    ```

  * `id` : #으로 나타냄

    ```html
    <h3 id="yellow">id 선택자</h3>
    ```

    ```css
    #yellow{
        color: yellowgreen;
    }
    /* id 선택자 */
    ```

  * `tag` : h1~h6, p, a, ...

* #### 우선순위

  * **id** - **class** - **tag** 순으로 우선순위

    ```html
    <h3 id="yellow" class="pink">id > class</h3>
    ```

* #### class 순서

  ```html
  <p class="bold pink blue">COLOR</p>
  ```

  * 띄어쓰기를 통해서 class를 구분할 수 있다.

  ```css
  .pink{
      color: pink;
  }
  .blue {
      color : blue;
  }
  ```

  * 결과는 `blue` class가 적용되어서 나온다.
    * css 파일의 코드상에 `blue` class가 가장 마지막에 있기 때문에 마지막에 있는 `blue` class가 적용되어서 나온다.
    * code의 순서도 중요하다.

* #### css를 적용시키기 위해서는 마크업을 하고 선택자를 부여한다. span, div 태그는 의미는 없지만 css 적용을 위해서 활용한다.

  * `markup(마크업)` : tag를 사용하는 것



## seletor(선택자) 심화

* #### 그룹 선택자

  ```css
  p, h1, h2, h3 {
      color :gray;
  }
  ```

  * 여러개의 seletor로 구성된 그룹선택자도 가능하다.

* #### 자식 셀렉터

  * 자식 선택자는 특정 요소의 **직계 자식**만 선택하는 선택자이다.
  * 자식 이후의 손자, 후손들은 포함하지 않는다. 
  * `ol` 이내에 있는 직계 자식 `li`만 darkgreen색으로 바뀐다.

  ```html
  <ol>
          <li>ol 자식 li</li>
  </ol>
  ```

  ```css
  ol > li {
      color : darkgreen;
  }
  ```

* `ol`중 id="choco" 안에 있는 `li`만 변한다.

  ```html
  <ol id="choco">
          <li>허쉬</li>
          <li>드림카카오</li>
          <li>쿠앤크</li>
  </ol>
  ```

  ```css
  ol#choco > li {
      color : chocolate
  }
  ```

* #### 후손 셀렉터

  * 문서 주소에서 특정 요소의 자손을 선택하는 선택자이다. 후손 셀렉터는 자식, 손자, 그리고 그 이후에 후손을 모두 포함한다.
  * 그러므로 `ul` 이내에 있는 `li` 요소는 모두 lime 색으로 바뀐다.

  ```html
  <ul>
          <div>
              <li>ul 자식 li</li>
              <li>ul 자식2 li</li>
          </div>
  </ul>
  ```

  ```css
  ul li {
      color: lime
  }
  ```



## Box model

#### 1. box model의 구성

* `Content` : 실제 내용이 위치

* `Padding` : 테두리 안쪽의 내부 여백 (요소에 적용된 배경의 컬러, 이미지는 패딩까지 적용)

* `Border` : 테두리 영역

* `Margin` : 테두리 바깥의 외부 여백 (배경색을 지정할 수 없다.)

  ```html
  <!-- 블록은 기본적으로 남은 너비는 오른쪽으로 붙는다.
          margin-left: auto; <-왼족에 남은 너비를 붙인다. (오른쪽 정렬)
          margin: auto; <- 오른쪽/왼쪽 반반 나눠준다. (가운데 정렬) 
  -->
  <div class="square" style="margin:auto">
      <p>가운데정렬</p>
  </div>
  <br>
  <div class="square" style="margin-left:auto">
      <p>오른쪽정렬</p>
  </div>
  ```



## Display

#### 1. block

* 항상 **새로운 라인에서 시작**한다.
* 화면 크기 전체의 가로폭을 차지한다. (width: 100%)
* block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다.
* block 레벨 요소의 예 : `div` , `h1~h6`, `p`, `ol`, `ul`, `li`, `hr`, `table`, `form`

#### 2. inline

* **새로운 라인에서 시작하지 않으며** 문장의 중간에 들어갈 수 있다.
* content의 너비만큼 가로폭을 차지한다.
* `width`, `height`, `margin-top`, `margin-bottom` 프로퍼티를 지정할 수 없다.
* 상, 하 여백은 `line-heigh`로 지정한다.
* inline 레벨 요소의 예 : `span`, `a`, `strong`, `img`, `br`, `input`, `select`, `textarea`, `button`

#### 3. inline-block

* block과 inline 레벨 요소의 특징을 모두 갖는다.
* **inline 레벨 요소처럼 한 줄에 표시**되면서 block에서의 width, height, margin(top, bottom)속성을 모두 지정할 수 있다.

#### 4. None

* 해당 요소를 화면에 표시하지 않는다. (공간조차 사라진다.)



## visibility Property

#### 1. visible

* 해당 요소를 보이게 한다. (기본값)

#### 2. hidden

* 해당 요소를 안보이게 한다. (공간은 존재한다.)



## Position

#### 1. static (기본위치)

* 기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치된다.
* 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.

#### 2. relative (상대위치)

* **기본 위치(static으로 지정되었을 때의 위치)**를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동

#### 3. absolute (절대위치)

* **부모 요소 또는 가장 가까이 있는 조상 요소(static 제외)를 기준**으로 좌표 프로퍼티만큼 이동한다.
* 즉, `relative`, `absolute`, `fixed` 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정된다.

#### 4. fixed (고정위치)

* 부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티를 사용하여 위치를 이동시킨다.
* 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.

```css
.relative-box {
    position: relative;
    background-color: navy;
    top: 10px;
    left: 10px;
}
/* relative는 부모(static) 기준으로 자리 잡는다. */
.absolute-box {
    position: absolute;
    background-color: red;
    top: 30px;
    left: 30px;
}
/* absolute 절대위치: 가장 가까이 있는 조상요소 기준으로 자리 잡는다. (static 제외) */

.fixed {
    width: 100%;
    position: fixed;
    background-color: chocolate;
    bottom: 0;
    left: 0;
    height: 20px;
}
/* fixed 고정위치: 브라우저의 viewport를 기준으로 같은 곳으로 고정시킨다.  */
```