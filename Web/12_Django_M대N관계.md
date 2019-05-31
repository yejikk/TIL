## Django M:N 관계 (다대다 관계)

> 각 모델은 M:N 관계를 가지고 있다.



## M:N관계 예시

> 의사 - 환자 관계
>
> - 의사는 여러명의 환자를 진료할 수 있고, 환자 또한 여러명의 의사에게 진료를 예약하고, 진료를 받을 수 있다. 이러한 관계를 M:N 관계라고 한다. 

* #### 의사-환자 예약간의 관계
  * #### Doctor

  | id   | name |
  | ---- | ---- |
  | 1    | Kim  |
  | 2    | Park |
  * #### Patient

  | id   | name | doctor_id |
  | ---- | ---- | --------- |
  | 1    | Tom  | 1         |
  | 2    | John | 1         |
  | 3    | Jane | 2         |
  * #### Reservation

  | 환자(Patient) | 의사(Doctor) |
  | ------------- | ------------ |
  | 1             | 1            |
  | 2             | 1            |
  | 3             | 2            |
  | 2             | 2            |

  * 환자는 여러명의 의사에게 예약을 해 진료를 받을 수 있으며, 의사 또한 여러명의 환자를 진료볼 수 있다.



* #### models.py (M:N 관계 모델 설계)

1.  **중개 모델(Intermediary Model)을 작성**하여 M:N 관계를 나타내기
   * 중개 모델을 사용하는 것은 M:N 관계에서 다른 field가 필요할 때 작성한다.
   * 만약, 다른 field가 필요하지 않다면 중개 모델을 작성할 필요는 없다.

```python
from django.db import models

# 1. 의사 model class 작성
class Doctor(models.Model):
    name = models.CharField(max_length=10)
    
# 2. 환자 model class 작성
class Patient(models.Model):
    name = models.CharField(max_length=10)
    # through을 통해 중개모델을 표현해준다. (through=M:N 관계를 이어주는 모델)
    doctors = models.ManyToManyField(Doctor, through='Reservation')
    
# 3. 중개 model class 작성 (의사-환자간의 예약이라는 중개모델을 사용한다.)
# 	: 중개 모델을 사용하는 경우는 두 사이 관계에 다른 field가 추가되어야할때 사용한다.
#	  만약, 다른 field가 필요없다면 중개 모델을 작성하지 않는다.
class Reservation(models.Model):
    hospital = models.CharField(max_length=20)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForignKey(Doctor, on_delete=models.CASCADE)
```



2. **중개 모델을 작성하지 않고** M:N 관계 나타내기
   * ManyToManyField와 related_name을 사용하여 M:N 관계를 나타낸다.
     * related_name을 설정하면 _set.all()을 설정해준 **related_name을 사용**하여 편하게 사용할 수 있다.
   * `doctor.patients.all()` == `doctor.patient_set.all()`
     * related_name을 사용하여 set을 쓰지 않고 object를 가져올 수 있다.
   * `patient.doctors.all()` == `patient.doctor_set.all()`
     * related_name을 사용하여 set을 쓰지 않고 object를 가져올 수 있다.

```python
from django.db import models

# 1. 의사 model class 작성
class Doctor(models.Model):
    name = models.CharField(max_length=10)
    
# 2. 환자 model class 작성
class Patient(models.Model):
    name = models.CharField(max_length=10)
    doctors = models.ManyToManyField(Doctor, related_name='patients')
```





