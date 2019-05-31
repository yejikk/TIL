# 190318-190319 Django_fbv

* ### FBV(Function Based View)

  * 함수형 뷰



## Form

#### : Django framework는 Model class로부터 form을 자동으로 생성하는 기능을 제공한다.

1. app 폴더에 `forms.py` 라는 새로운 파일을 생성한다.

   * `from django import forms` 를 import 시켜준다.

   * **form**을 작성하는 2가지 방법 (Model form을 주로 사용한다.)

     * 일반 `form` 
       *  form을 상속 받아서 씀
       * 직접 `field`를 정의해야하며, `widget`설정이 필요하다.

     ```python
     # form.py
     class BoardForm(forms.Form):
         title = forms.CharField(label='제목', max_length=10,
                              # max_length를 설정해두면, 그 길이를 넘으면 경고메세지가 뜸.
                              error_message={'required': '제목을 반드시 입력해주세요.'})
        
         content = forms.CharField(label='내용',
                              error_message={'required': '내용을 반드시 입력해주세요.'})
     ```

     * `Model Form` 
       * 모델을 지정하면 해당 모델의 폼을 생성 한다.
       * form class 안에 Meta class(Inner 클래스)를 정의하고, Meta 클래스 안에 해당 모델 클래스를 지정한다. (어떤 모델을 기반으로 폼을 작성할 것인지를 Meta.model에 지정하는 것이다.)

     ```python
     # forms.py
     class BoardForm(forms.ModelForm):
         class Meta:
             model = Board # 어떠한 model을 지정할 것인지 작성한다.
             field = '__all__' # 어떠한 field를 지정할 것인지 작성한다. 
             widgets = {'title': forms.TextInput(attrs={'placeholder': '제목을 입력해주					세요.', 'class': 'title'}),
                         'content': forms.Textarea(attrs={'placeholder': '내용을 입력해					주세요.', 'class': 'content'})}
             
             error_messages = {'title': {'required': '제목을 반드시 입력해주세요.'}, 							'content': {'required': '내용을 반드시 입력해주세요'}}
     ```

   * 사용자 `form`이 정의되면, view와 template에서 사용할 수 있다.



2. `views.py` : model form을 사용하였다.

   * `from .forms import BoardForm`을 먼저 import 시켜준다.

   * `create` : 생성

     ```python
     # views.py
     def create(request):
         if request.method == 'POST':
             board_form = BoardForm(request.POST)
             if board_form.is_valid():
                 board_form.save()
                 return redirect('board:detail', board.pk)
                 
         
     ```

   * `request.POST` 

     * `request.POST` 는 Dictionary로서 POST된 데이터를 가지고 있다.

   * `is_valid()` 메서드 

     * POST data에 잘못된 data의 유무를 판단하여 올바른 data라면 **save()** 메서드를 호출하여 DB에 저장한다.



## 추가 내용

static : 내가 사용하는 정적파일(img, js, css)

* 내가 만든 파일(home.css)

* 외부에서 가져온 파일(bootstrap.min.css) - 수정하는 경우가 거의 없음

  ```python
  STATIC_URL = '/static/'
  STATICFILES_DIRS = [
      os.path.join(BASE_DIR, 'django_fbv', 'asserts')
  ]
  CRISPY_TEMPLATE_PACK = 'bootstrap4'
  ```

* 이렇게 다른 파일들을 따로 관리하는 것이 좋음





media : 클라이언트가 업로드 한 파일