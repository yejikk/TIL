# 190409 Django | 회원정보수정, 사용자와 사용자 글 관리

## CRUD

#### 4. 회원 정보 삭제

* **urls.py**

  ```python
  urlspatterns = [
      path('delete/',views.delete, name='delete'),
  ]
  ```

* **views.py**

  ```python
  # login을 요구하는 함수
  from django.contrib.auth.decorators import login_required
  # http request 방법을 나타내는 함수
  from django.views.decorators.http import require_http_methods
  
  # 로그인이 되어있어야 한다.
  @login_required
  # POST 방식으로만 logout을 하며, 다른 방식으로 logout 요청이 들어온다면 405 page를 띄워 error를 확인시켜준다.
  @require_http_methods(['POST'])
  def delete(request):
      # request안에 user가 포함되어 있기 떄문에 바로 삭제가 가능하다.
      request.user.delete()
      return redirect('boards:index')
  ```


#### 5. 회원 정보 Update

* **urls.py**

  ```python
  urlspatterns = [
      path('update/', views.update, name='update'),
  ]
  ```

* **forms.py**

  ```python
  # 모든 user 정보를 받아온다.
  from django.contrib.auth import get_user_model
  # UserChangeForm을 상속받기 위하여 import 시켜준다.
  from django.contrib.auth.forms import UserChangeForm
  
  # UserChangeForm을 상속받아 새로운 form을 생성한다.
  class UserCustomChangeForm(UserChangeForm):
      class Meta:
          model = get_user_model()
          fields = ('email', 'first_name', 'last_name')
  ```

* **views.py**

  * **UserChangeForm** 내장 뷰 함수는 update(수정)할 수 있는 사용자의 모든 정보가 뜨기 때문에 **UserCustomChangeForm**을 직접 만들어줌
  * **UserCustomChangeForm**을 만든 후 import 시켜준다.

  ```python
  # 인증된 세션은 이 함수가 반환한 해쉬를 포함한다.
  from django.contrib.auth import update_session_auth_hash
  # 직접 만들어준 form
  from .forms import UserCustomChangeForm
  
  def update(request):
      if request.method == 'POST':
         # 수정 후 update를 해줘야하기때문에 꼭 instance를 써줘야한다. 
         # instance정보는 해당 사용자에 대한 정보이다.
         # instance를 해주지 않으면 create가 된다.(새로운 객체 생성됨)
         user_from = UserCustomChangeForm(request.POST, instance=request.user)
         if user_form.is_valid():
         		user = user_form.save()
              # update된 해쉬를 포함한다.
              update_session_auth_hash(request, user)
              return redirect('boards:index')
          
      else:
          # instance를 같이 넣어줘서 수정임을 알게한다.
          user_form = UserCustomChangeForm(instance=request.user)
      context = {'user_form': user_form}
      return render(request, 'accounts/update.html', context)
  ```



#### 6. 회원 비밀번호 변경

* **urls.py**

  ```python
  urlpatterns = [
      path('password/', views.password, name='passoword'),
  ]
  ```

* **views.py**

  ```python
  from django.contrib.auth.decorators import login_required
  # 비밀번호를 변경해주는 Form을 따로 import해줘야 한다.
  from django.contrib.auth.forms import PasswordChangeForm
  
  # 로그인을 요구한다. (로그인이 되어있어야 함)
  @login_required
  def password(request):
      if request.method == 'POST':
          user_form = PasswordChangeForm(request.user, request.POST) # 순서 주의, request.user이 먼저 들어와야 한다.
          if user_form.is_valid():
              user = user_form.save()
              
              update_session_auth_hash(request, user)
              return redirect('boards:index')
      else:
          # instance= 를 쓰지 않는다.
          # user정보가 들어가있어야 한다. 해당하는 user의 비밀번호를 변경하여 다시 암호화 해야하기 때문에
          user_form = PasswordChangeForm(request.user)
      context = {'user_form': user_form}
      return render(request, 'accounts/update.html', context)
  ```
