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



#### 7. 작성자만이 글을 수정 / 삭제 (다른 회원은 불가)

> 접근 자체를 막아주기 위해 views.py를 수정하고, 작성자 또는 관리자가 아니라면 form과 link를 보여주지 않도록 template(detail.html)을 수정해줘야한다.

> url(link)로 접속하여 임의로 수정이나 삭제를 할 수 있기 때문에 views.py code를 수정하여 이를(잘못된 접속) 막아줘야 한다.

> create(작성자 등록) -> update, delete에서 현재 사용자와 작성자가 같은지 확인 

* **models.py**

  * **1:N** : 한 명(user)은 여러 개의 board(게시글)을 쓸 수 있다.
  * 게시글을 쓴 user를 나타내기 위하여 Board class에 user를 추가한다.
  * 모든 user를 가져오기 위해 `from django.conf import settings`를 사용한다.

  ```python
  # user가져오는 가장 좋은 방법
  from django.conf import settings
  # settings.AUTH_USER_MODEL
  # default 값이 auth.User이다.
  
  class Board(models.Model):
      # user를 추가한다. (1명의 user N개의 board이기 때문에 user를 외래키로 사용한다.)
  	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  ```

* **urls.py**

  ```python
  urlpatterns = [
      path('<int:board_pk>/update/', views.update, name='update'),
      path('<int:board_pk>/delete/', views.delete, name='delete'),
  ]
  ```

* **views.py**

  * **글 작성자 저장하기** (create)

    * 기존 board에는 user를 저장해주는 것이 없었기 때문에(db에 없음) create 함수에서 user(작성자)를 저장해주는 code를 작성해줘야한다.

    ```python
    def create(request):
        if request.method == 'POST':
            board_form = BoardForm(request.POST)
            if board_form.is_valid():
                # database에 저장하지 않은 채로 object return하기 때문에 model instance를 				 save시켜줘야함
                # commit=False(db 중복 방지)
                board = board_form.save(commit=False)
                # board_form을 저장해준 후 user(작성자)도 따로 저장해줘야한다. 
                # (form에 user가 없기 때문이다.)
                # 현재 사용자가 작성자이므로 board.user에 저장해준다.
                board.user = request.user
                # board.save()를 통해 user를 db에 생성해준다.
                board.save()
                return redirect(board) # 클래스에 함수를 만들어줌
        else:
            board_form = BoardForm()
        context = {'board_form': board_form}
        return render(request, 'boards/form.html', context)
    ```

  * 작성자 글 수정 (**update**)

    * 관리자도 글을 수정할 수 있음 : `is_superuser`를 사용하여 알 수 있다.
    * 작성자나 관리자가 아니라면 `link`자체에도 접근하지 못하도록 조건문을 작성하여 확인해준다. 
      * 이 조건을 제일 처음에 작성해줘야지 접속을 막을 수 있다.

    ```python
    def update(request, board_pk):
        board = get_object_or_404(Board, pk=board_pk)
        # 현재 사용자(로그인 되어있는)와 작성자가 같거나, 관리자라면
        # (link 접속 자체를 막기 위해서)
        if request.user == board.user or request.user_is.superuser:
            if request.method == 'POST':
                board_form = BoardForm(request.POST, instance=board)
                if board_form.is_valid():
                    board_from.save()
                    return redirect('board:detail', board.pk)
            else:
                board_form = BoardForm()
            context = {'board_form': board_form}
            return render(request, 'boards/form.html', context)
        
        # 작성자나 관리자가 아니라면 redirect 시켜준다.
        else:
            return redirect('board:index')
    ```

  * 작성자 글 삭제(**delete**)

    * 관리자도 글을 삭제할 수 있음 : `is_superuser`를 사용하여 알 수 있다.
    * 작성자나 관리자가 아니라면 `link`자체에도 접근하지 못하도록 조건문을 작성하여 확인해준다. 
      * 이 조건을 제일 처음에 작성해줘야지 접속을 막을 수 있다.

    ```python
    def delete(request, board_pk):
        board = get_object_or_404(Board, pk=board_pk)
        if request.user == board.user or request.user.is_superuser:
            if request.method == 'POST':
                board.delete()
                return redirect('boards:index')
            else:
                return redirect(board)
        else:
            return redirect(board)
    ```

* **template** (detail.html)

  * 사용자와 작성자가 같은지 확인하여 **작성자 또는 관리자라면 삭제 form과 수정 link버튼을 보여준다.**
    * 같지 않다면 애초에 링크 자체를 보여주지 않는다.

  ```html
  {% if request.user == board.user or request.user.is_superuser %}
      <form action="{% url 'boards:delete' board.pk %}" method='POST'>
          {% csrf_token %}
          <input type="submit" value="글 삭제">
      </form>
      <a href="{% url 'boards:update' board.pk %}">글 수정</a>
  {% endif %}
  ```
