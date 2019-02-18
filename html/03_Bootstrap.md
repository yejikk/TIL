# 190121~190122 Bootstrap

## 1. Utilities

### 1.1 Spacing

* `m-0` : margin: 0
* `mr-0` : margin-right: 0
* `mx-0` : margin-right, margin-left: 0 (오른쪽, 왼쪽 똑같이 적용됨.)
* `my-0` : margin-top, margin-bottom: 0 (위, 아래 똑같이 적용됨.)
* `mx-auto` : margin 남은 여백 나눠주기.
* `pt-0` : padding-top: 0
* `pb-0` : padding-bottom: 0
* `pr-0` : padding-right: 0

![](C:\Users\kig95\Desktop\Til\image\bootstrap_margin.png)

### 1.2 Color

* `bg-primary` : 배경이 파란색
* `text-success` : 글씨가 초록색
* `alert-warning` : alert component 노란색



### 1.3 Border

* `rounded-circle` : 원으로 만들어줌
* `rounded-pill` :  모서리가 둥근 사각형



### 1.4 display (Box model display)

* `d-block`
* `d-line`
* `d-inline-block` 
* `d-table`



### 1.5 position

* `position-static` 
* `position-relative`
* `position-absolute`
* `position-fixed`
* `fixed`
  * `fixed-top` 
    * top: 0;
  * `fixed-bottom`
    * bottom: 0;



### 1.6 Text

* `text-align: center` : Text 가운데 정렬
* `text-left` : Text 왼쪽 정렬
* `font-weight: bold` : font 굵게



### 1.7 flex

1. **flex-row** / **flex-column**
   * item을 행으로 배치하거나 열로 배치할 수 있다.
   * 기본 값은 row이다.
   * row-reverse, column-reverse로 배치를 뒤집을 수 있다.
2.  **justify-content **(기본적으로 행을 조정한다.)
   * start : 왼쪽으로
   * end : 오른쪽으로
   * center : 중앙
   * between : item들 사이에 동일한 간격
   * around : item들 주위에 동일한 간격
3. **align-items** (기본적으로 열을 조정한다.)
   * start : 위쪽으로
   * end : 아래쪽으로
   * center : 중앙
   * stretch : (기본값) 부모의 크기만큼 늘린다.
4. **flex-wrap**
   * item이 부모의 크기를 넘어가지 못하게 만든다.