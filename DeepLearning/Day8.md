# 190605 Day8

> 모두를 위한 딥러닝 시즌1 강좌 - Lec10-1, 10-2, 10-3, 10-4, 11-1, 11-2, 11-3
>
> 모두를 위한 딥러닝 시즌1 강좌 - Lab10



1. **Vanishing gradient (NN winter2 : 1986-2006)**
   * 깊은 NN일 경우, back propagation이 진행되면서 점점 초반 부분의 layer들의 영향력이 작아지는 문제
   * sigmoid를 사용할 경우 이 문제가 크게 발생한다. 
   * ReLU등의 다른 activation functions을 사용하면서 어느정도 해결할 수 있다.



2. **ReLU**
   * 0보다 작을 때는 0을 사용하고, 0보다 큰 값에 대해서는 해당 값을 그대로 사용하는 방법이다.
   * 음수에 대해서는 값이 바뀌지만, 양수에 대해서는 값을 바꾸지 않는다.
   * backpropagation에서 layer를 따라 진행할수록 값이 사라지는 현상은 ReLU를 통해 해결할 수 있다.



3. **Initializing weights wisely**
   * Not all 0's
   * challenging issue



4. **Dropout**
   * NN에서 학습할 때 임의로 노드들중 일부를 쉬게함으로서 overfitting을 해결하는 방법.



5. **Padding**
   * conv layer를 거칠 때 마다 size가 작아지는 것을 막기 위해 padding을 넣을 수 있다