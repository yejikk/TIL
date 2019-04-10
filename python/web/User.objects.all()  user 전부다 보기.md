pip install django==2.1.5 : django 프로젝트 새로 만들때 버전



User.objects.all() : user 전부다 보기



from django.contrib.auth.models import Group, Permission, User

: 이걸 쓰면 user를 볼 수 있음



from django.contrib.auth import get_user_model : 얘를 사용



User = get_user_model() 

: user object 그 자체



```bash
>>> u = Uuser.objects.all()[0]
>>> u
<User: yeji>
>>> dir(u)
['DoesNotExist', 'EMAIL_FIELD', 'Meta', 'MultipleObjectsReturned', 'REQUIRED_FIELDS', 'USERNAME_FIELD', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_check_column_name_clashes', '_check_field_name_clashes', '_check_fields', '_check_id_field', '_check_index_together', '_check_indexes', '_check_local_fields', '_check_long_column_names', '_check_m2m_through_same_relationship', '_check_managers', '_check_model', '_check_model_name_db_lookup_clashes', '_check_ordering', '_check_property_name_related_field_accessor_clashes', '_check_single_primary_key', '_check_swappable', '_check_unique_together', '_do_insert', '_do_update', '_get_FIELD_display', '_get_next_or_previous_by_FIELD', '_get_next_or_previous_in_order', '_get_pk_val', '_get_unique_checks', '_meta', '_password', '_perform_date_checks', '_perform_unique_checks', '_save_parents', '_save_table', '_set_pk_val', '_state', 'check', 'check_password', 'clean', 'clean_fields', 'date_error_message', 'date_joined', 'delete', 'email', 'email_user', 'first_name', 'from_db', 'full_clean', 'get_all_permissions', 'get_deferred_fields', 'get_email_field_name', 'get_full_name', 'get_group_permissions', 'get_next_by_date_joined', 'get_previous_by_date_joined', 'get_session_auth_hash', 'get_short_name', 'get_username', 'groups', 'has_module_perms', 'has_perm', 'has_perms', 'has_usable_password', 'id', 'is_active', 'is_anonymous', 'is_authenticated', 'is_staff', 'is_superuser', 'last_login', 'last_name', 'logentry_set', 'natural_key', 'normalize_username', 'objects', 'password', 'pk', 'prepare_database_save', 'refresh_from_db', 'save', 'save_base', 'serializable_value', 'set_password', 'set_unusable_password', 'unique_error_message', 'user_permissions', 'username', 'username_validator', 'validate_unique']
```



u = User.objects.create_user('sweet', 'sweet@', '123') -> username, email, password 순서

: create_user로 해야지 패스워드를 암호화시킬수 있다.



 u.check_password('321')

: password가 암호화 되어있는지 확인함

그래서 그냥 password를 설정해주면 False가 뜸



u.set_password('321')

: 비밀번호 바꾸기



### PBKDF2 : 패스워드 설정

* <https://d2.naver.com/helloworld/318732> : 패스워드 설정 설명
* 



'django.contrib.auth', : 로그인 회원가입과 관련된 툴?





from django.contrib.auth.forms import UserCreationForm : 비밀번호 암호화 저장





http 

1. connectless
2. stateless : 상태를 알 수 없음



UserCreationForm : 회원가입용도

AuthenticationForm : 로그인 용도, 세션을 추가함



auth_login(request, login_form.get_user()) # 사용자 관련 정보만 뽑아서 세션을 만들어주는 method



login_form = AuthenticationForm(request, request.POST) : http 관련 정보도 얻어와야하기 때문에 request도 넣어줘야함



@login_required # 로그인이 안되어있으면 login 창부터 띄워준다.  

: login이 반드시 필요하다.



settings.py, LOGIN_URL : '/accounts/login/' 이 default로 되어있음.



* 1:N 
  * 한명(user)은 여러개의 board(게시글)을 쓸 수 있다.



* hash: 어떠한 자료를 키로 가져있으면 연결을 하겠다
  * dictionary  형태임



* decorator에서 가져온다.
  * from django.views.decorators.http import require_http_methods, require_POST



* form 정리

  * 회원가입 - 회원변경(ModelForm), 로그인 - 비밀번호 변경(Form)
  * ModelForm은 request.POST 넣고 instance를 넣음
    * 기본적으로 수정을 할 때에는 instance를 넣음
  * Form은 ModelForm을 상속받는 것이 아니라서 앞에 request가 반드시 필요하다.
    * ModelForm과 다르다.

  | Django user form   | 용도          | 상속      |
  | ------------------ | ------------- | --------- |
  | UserCreationForm   | 회원가입      | ModelForm |
  | AuthenticationForm | 로그인        | Form      |
  | UserChangeForm     | 회원변경      | ModelForm |
  | PasswordChangeForm | 비밀번호 변경 | Form      |


user.email|makehash



프로필 페이지(유저 detail)

- gravatar 이미지
- 이메일
- username / 이름
- 그 사람이 쓴 글