```bash
(django-venv) dpwl7484:~/workspace/instagram (master) $ pyenv local insta-venv
pyenv: version `insta-venv' not installed
(django-venv) dpwl7484:~/workspace/instagram (master) $ pyenv virtualenv 3.6.7 insta-venv
Looking in links: /tmp/tmpxynybtvg
Requirement already satisfied: setuptools in /home/ubuntu/.pyenv/versions/3.6.7/envs/insta-venv/lib/python3.6/site-packages (39.0.1)
Requirement already satisfied: pip in /home/ubuntu/.pyenv/versions/3.6.7/envs/insta-venv/lib/python3.6/site-packages (10.0.1)
(django-venv) dpwl7484:~/workspace/instagram (master) $ pyenv local insta-venv
(insta-venv) dpwl7484:~/workspace/instagram (master) $ 

# 가상머신 바꾸기
```



```bash
pip install django==2.1.8

# sqlite를 위해 version 맞추기
```



```bash
pip freeze -> requirments.txt

# 이상태로 고정하고 이를 requirments에 기록한다.
```



* image 업로드 (단순히 이미지만 받는 작업)

1. `models.py` 

   ```python
   class Post(models.Model):
       image = models.ImageField()
   ```

   * python manage.py makemigrations
   * python manage.py migrate



2. `pip install pillow` 



3. `settings.py`

   ```python
   # url을 설정해준다.
   MEDIA_URL = '/media/'
   # 실제로 사진이 저장되는 곳
   MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
   ```

   * 그 다음 **project에 media**라는 폴더를 만들어 준다.



4. `project/urls.py`

   ```python
   # url을 설정해야지만 url로 사용할 수 있다.
   from django.conf import settings
   from django.conf.urls.static import static
   
   urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
   ```


5. `forms.py `에 `image` 필드 추가



6. `views.py`에 `request.FILES`를 추가해줘야 한다.



7. `html` 파일에서 `form`에 이미지 업로드를 위해서 `enctype="multipart/form-data"`를 추가해줘야 한다.

   ```html
   <!-- 어떤 type으로 받을 것인가, encoding을 맞춰서 받아준다. -->
   <!-- enctype이 없다면 text로 받아진다. (image로 받을 수 없다.) -->
   <form method="POST" enctype="multipart/form-data">
   ```
