# 05_Life Cycle



1. Mounting
   * 생성
   * 리액트 컴포넌트가 생성될때 끼워넣는것
2. Unmounting
   * 리액트 컴포넌트를 없애는 것
3. Updation
   * Props가 바뀔때
   * State가 바뀔때



## 현재 version

> Component 생성 및 마운트

* constructor
* componentWillMount
* render
* componentDidMount
  * timer를 걸거나 request요청을 할 때 사용한다.



state가 변경되면 shouldComponentUpdate부터 실행된다.

* shouldComponentUpdate부터
  * 중요! 최적화 담당
  * boolean형태의 값을 리턴해야한다.
  * return true면 그 다음단계로 이동 ()

* hook을 사용하려면 class component를 사용해야한다.

