# Deep Learning 정리

1. **softmax** 
   * 데이터를 2개 이상의 그룹으로 나누기 위해서 binary classification을 확장한 모델이다.
   * 새로운 조건으로 가장 큰 값을 찾는 개념
   * 일반적으로는 큰 숫자를 찾는 것이 hardmax에 해당하고, 숫자를 거꾸로 뒤집었을 경우에 대해 가장 큰 숫자를 찾는 것이 softmax이다.
   * binary classification을 여러번 결합한 결과.
   * softmax의 역할
     * 입력을 sigmoid와 마찬가지로 0과 1사이의 값으로 변환한다.
     * 변환된 결과에 대한 합계가 1이 되도록 만들어 준다.
   * one-hot encoding은 softmax로 구한 값 중에서 가장 큰 값을 1로, 나머지는 0으로 만든다.
     * tensorflow에서 argmax함수라는 이름으로 제공하고 있다.



2. **sigmoid**
   * 선형인 멀티퍼셉트론에서 비선형 값을 얻기 위해 사용한다.
   * logistic classification에서 어디에 속하는지 분류를 하기 위해 사용한다. 일정 값을 넘어야 성공하는 참(True)이 될 수 있기 때문에 Activation function이라고도 부른다.
   * sigmoid의 특징
     * 함수값이 (0, 1)로 제한된다.
     * 중간 값은 1/2이다.
     * 매우 큰 값을 가지면 함수값은 거의 1이며, 매우 작은 값을 가지면 거의 0이다.
   * sigmoid의 단점
     * Gradient Vanishing 현상이 발생한다. 미분함수에 대해 x=0에서 최대값 1/4을 가지고, input값이 일정 이상 올라가면 미분값이 거의 0에 수렴하게 된다. 이는 |x| 값이 커질 수록 Gradient Backpropergation시 미분값이 소실될 가능성이 크다.
     * 함수값 중심이 0이 아니다. 함수값 중심이 0이 아니라 학습이 느려질 수 있다.
     * exp 함수 사용시 비용이 크다.

![](image/sigmoid, relu.JPG)



3. **ReLU**
   * 0보다 작을 때는 0을 사용하고, 0보다 큰 값에 대해서는 해당 값을 그대로 사용하는 방법이다.
     * 음수에 대해서는 값이 바뀌지만, 양수에 대해서는 값을 바꾸지 않는다.
   * backpropagation에서 layer를 따라 진행할수록 값이 사라지는 현상은 ReLU를 통해 해결할 수 있다.



4. **Weight**
   * 전체 초기값을 0으로 주어서는 안되며, 적절하게 wieght를 초기화 해야한다.



5. **RBM(Resticted Boltzmann Machine)**



6. **overfitting**



7. **Regularizaion**





