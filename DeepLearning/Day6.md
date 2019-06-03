# 190603 Day6

> 모두를 위한 딥러닝 시즌1 강좌 - Lec7-1, 7-2, 8-1, 8-2
>
> 모두를 위한 딥러닝 시즌1 강좌 - Lab7-1, 7-2



## Learning rate

> Gradient Desent Algorithm 에서 cost 값의 최소값을 찾아갈 때 learning rate alpha 값을 정의했다.
>
> learning rate를 잘못 조절하면 원하는 결과가 나오지 않을 수 있으므로 잘 조절하는 것이 중요하다.



1. **Learning rate가 큰 경우**
   * learning rate는 곡선의 경사면을 따라 내려가는 간격을 의미한다.
   * 이동하는 간격이 크다면 곡선의 최소점으로 수렴하는 것이 아니라 최소점 근처에서 왔다갔다 할 수도 있다.
   * 이동하는 간격이 너무 크다면 곡선 아래가 아닌 위로 발산하는 경우도 생길 수 있다.
   * 이와 같은 경우를 **overshooting**이라고 한다.
   * cost 함수값을 계산하는데 cost 값이 줄어들지 않고 커지는 경우에는 overshooting을 의심해봐야 한다.



2. **Learning rate가 작은 경우**
   * learning rate가 작은 경우에는 경사면을 따라 이동하는 것이 더디게 된다.
   * 일정 시간이후에 이동을 멈출 수 밖에 없는데 최저점에 이르지 못한 상태가 된다.
   * 이를 회피하기 위해서는 cost 함수값을 출력해서 변화되는 값을 봐야한다. 거의 변하지 않으면 learning rate가 너무 작은 것인지 의심해봐야 한다



* **Learning rate 결정에 답은 없지만, 보통 0.01을 사용하는데 데이터에 따라 달라질 수 있어 cost 함수의 값을 보고 결정해야 한다.**



## 데이터 전처리 (Data Preprocessing)

