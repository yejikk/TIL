# 190604 Day7

> 모두를 위한 딥러닝 시즌1 강좌 - Lec9-1, 9-2
>
> 모두를 위한 딥러닝 시즌1 강좌 - Lab9-1, 9-2



## XOR 게이트에 대한 신경망

* **하나의 회귀분석 모델로는 XOR의 값을 구분할 수 없다.**
  * 1개의 신경망 모델로는 XOR의 값을 구분할 수 없다는 것이 수학적으로 증명됨
  * 하지만 신경망 모델을 조합하면 XOR을 구분할 수 있다는 것이 발견되었다.



* **신경망을 사용해 XOR 값 구분하기**

  * XOR은 선형으로 구분하는 것이 불가능하다.

    | X1   | X2   | XOR  |
    | ---- | ---- | ---- |
    | 0    | 0    | 0    |
    | 0    | 1    | 1    |
    | 1    | 0    | 1    |
    | 1    | 1    | 0    |

    위처럼 나타내기 때문에 선형적으로 나타내기가 불가능하다.

  * 신경망 모델 조합
    * **x1=0, x2=0** 일 때
      * 
    * **x1=0, x2=1** 일 때



## Forward Propagation

* input training data로부터 output을 계산하고, 각 ouput neuron에서의 error를 계산한다. 
  * `input -> hidden -> output` 으로 정보가 흘러가므로 ‘forward’ propagation이라 한다.
* 여러 개로 구성한 신경망을 하나로 합쳐서 구성한 모델에서 XOR을 구분할 수 있는 다양한 weight와 bias값이 존재하는 것을 알 수 있다. 입력값을 weight와 bias로 계산하여 출력값을 계산하는 방식이 **forward propagation**이다.



## Back Propagation 

* output neuron에서 계산된 error를 각 edge들의 weight를 사용해 바로 이전 layer의 neuron들이 얼마나 error에 영향을 미쳤는지 계산한다.
  * `output -> hidden` 으로 정보가 흘러가므로 ‘back’ propagation이라 한다.
* forward propagation 방법으로 계산한 값과 실제의 값을 비교한 후 오차를 반영하여 weight와 bias를 조절하는 방법이 back propagataion

