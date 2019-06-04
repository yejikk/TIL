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

* weight가 2개인 경우 
  * 둘 사이의 값의 크기 차이가 많이 날 때, learning rate alpha 값을 잘못 잡으면 weight-cost 그래프에서 값이 튀어나갈 수 있기 때문에 데이터를 표준화 하는 것이 필요하다.

* Grandient Desent Algorithm을 잘 설계했더라도 학습을 하면 결과가 안좋은 경우 초기 데이터 전처리가 잘 안되어 있을 확률이 높다. 그렇기 때문에 전처리 과정이 꼭 필요하다.





## 데이터 정규화(Data Normalization or Regularization)

* **Data Normalization** 
  * (0, 0) 중심에서 일정 범위 안에 분포하도록 한다.
  * standardization으로 Normalization한다. (평균 분산 표준편차로 계산하여 그 값들의 차이를 비교한다.)



* **Overfitting**
  * 머신러닝은 학습을 통해서 모델을 만들어 가는 과정이나 학습 데이터에 너무 잘맞는 모델이 만들어 질 수 있다. 학습 데이터에 딱 들어맞지만 테이트 데이터로 물어보거나 실제 사용시에 정확도가 떨어지는 모델을 overfitting 되었다고 말한다.
  * 해결 방법
    * feature 개수 줄이기
    * 학습 데이터를 많이 준비해 학습 시키기
    * 데이터 정규화(regularization)하기.



* **Regularization (일반화)**
  * 데이터를 표현하는데 최대한 덜 울퉁불퉁하도록 표현한다.
    * 학습 데이터에 맞게 decision boundary를 구부리지 말고 펴도록 해야 한다.
  * weight를 너무 크게 만들지 않는다.
  * lambda
    * lambda=0이면 regularization을 사용하지 않게 된다.
    * lambda>1 이면 regularization을 굉장히 중요하게 생각해 사용한다.
    * lambda이 적당한 값이면 regularization을 사용하지만 크게 중요하게는 생각하지 않는다는 의미이다.

