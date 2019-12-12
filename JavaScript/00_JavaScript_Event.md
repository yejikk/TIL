# 00_Javascript_Event_정리

> 하루에 하나씩 Javascript를 활용한 Event 정리하기!



1. `onChange`
   * input, select 등 내용 변경 감지
   * `event.target.value`를 console에 찍어보면 변경된 내용이 나온다.

2. `reset`
   * reset 기능, 초기화를 시켜준다.
   * form 안에 내용을 초기화 시키는 용도로 많이 사용한다.
3. `submit`
   * form 안에 있는 내용을 `submit`할 때 사용하는 event이다.

4. `resize`
   * 브라우저의 창 크기를 조절할 때 사용한다.

5. `load`
   * image, javascript file, css file과 같은 외부 자원을 포함하여 페이지를 완전히 불러왔을 때 발생하는 event

6. `scroll`
   * 문서를 스크롤하는 동안 발생하는 event
   * scrollLeft와 scrollTop을 통해 얼마나 스크롤한지 알 수 있다.

7. `oncopy`
   * `control` + `c`를 눌렀을때(복사) 발생하는 event

8. `onpaste`
   * `control` + `v`를 눌렀을때(붙여넣기) 발생하는 event