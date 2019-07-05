# Django - Mysql 연동

> django에서는 기본적으로 database를 SQLite를 사용하도록 구성되어있다. 
>
> SQLite는 소규모 프로젝트에는 적절하지만 대규모 프로젝트에는 적절하지 않다. 이를 보완하기 위해 Mysql를 연동시킨다.



## 연동하기

> python3.7.2 설치

1. `django` **개발 환경 setting**

   * `git bash`를 활용하여 개발 환경 setting에 필요한 명령어를 작성한다.

   * `python -V`를 통해 파이썬 버전을 확인한다.

     ```bash
     $ pyenv install 3.7.2
     $ pyenv global 3.7.2
     $ pyenv rehash
     $ python -V
     ```

   * 가상환경을 원하는 폴더를 생성한 후, 그 폴더에 아래 명령어를 작성한다.

     ```bash
     $ python -m venv django-venv(가상환경이름)
     ```

   * 가상환경을 켠다.

     ```bash
     $ cd django-venv
     $ source Scripts/activate
     ```

   * 만약, 이 과정 중 가상 환경 setting이 제대로 되지 않았다면 시스템 환경 변수를 편집해야한다.

     * Users 다음 폴더는 user이름

     ```text
     C:\Users\multicampus\.pyenv\pyenv-win\shims
     C:\Users\multicampus\.pyenv\pyenv-win\bin
     ```

     

2. `mysql` **설치**

   *  [mysql홈페이지](<https://dev.mysql.com/downloads/installer/>)에 접속하여 아래 파일 download

   ![](C:\Users\multicampus\Desktop\예지\TIL\image\mysql 설치.PNG)



3. `mysql` **설치 후, DB생성**

   * `mysql workbench`에서 root 계정으로 로그인을 한다. (설치 과정에서 생성한 비밀번호를 입력하면 로그인이 된다.)
   * `create database` 명령문을 통하여 db를 생성한다.
   * db 생성 후 실행한다.

   ![](C:\Users\multicampus\Desktop\예지\TIL\image\db생성.PNG)

4. **Django - Mysql 연동하기**

   > django에서 제공하는 Mysql 연동 드라이버 모듈중 Mysqlclient를 사용한다. Mysqlclient는 MySQLdb를 개선한 패키지 이며, python3.3 이상의 버전을 지원한다.

   * `mysqlclient` 설치

     ```bash
     $ pip install mysqlclient
     ```

   * 설치 중 오류가 발생한다면,

     * `error: Microsoft Visual C++ 9.0 is required (Unable to find vcvarsall.bat). Get it from http://aka.ms/vcpython27`

       위 사이트에 가서 설치를 하여도 `mysql.h`를 찾을 수 없다고 error가 뜬다면 Mysqlclient을 미리 컴파일된 pip용 whl 파일을 [다운]( https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient )받는다.

     * whl 파일 다운 시 자신의 python version과 bit를 잘 확인하여 다운 받아야 한다.

     * whl 파일 다운이 완료된다면, whl 파일을 가상환경이 있는 폴더로 옮긴 후 아래 명령어(자신이 다운로드한 whl 파일 이름으로 수정하여 작성하여야 한다.)를 bash창에 입력한다.

       ```bash
       $ pip install mysqlclient-1.4.2-cp37-cp37m-win32.whl
       ```

   * 다시 `pip install mysqlclient` 명령어를 입력한 후 연동을 완료한다.



5. `settings.py`**에서 database 설정**

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'djangotest',
           // mysql workbench에서 만든 database이름
           'USER': 'root',
           // DB 연결시 사용할 user name
           'PASSWORD': 'rnldyal7484!',
           // mysqlworkbench에서 login한 password
           'HOST': 'localhost',
           'PORT': ''
       }
   }
   ```

   * 위 설정을 끝낸 후, `python manage.py migrate`를 한다.

   * 만약, 아래와 같은 오류가 발생한다면 password가 너무 길어 발생한 오류이므로 password를 바꿔준다.

     ```
     django.db.utils.OperationalError
     ```

   * password 변경을 위하여 `MySQL 8.0 Command Line Client`를 실행한다.

     ![](C:\Users\multicampus\Desktop\예지\TIL\image\mysql password 변경.PNG)

     [출처](<https://stackoverflow.com/questions/51926091/django-mysqlclient-backend-produces-django-db-utils-operationalerror-2059-nu>)

     * 위 code를 작성하여 비밀번호를 짧고 간결한 것으로 변경한다.

   * 비밀번호 변경 후 `settings.py`에서 다시 PASSWORD를 수정한다.

     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.mysql',
             'NAME': 'djangotest',
             // mysql workbench에서 만든 database이름
             'USER': 'root',
             // DB 연결시 사용할 user name
             'PASSWORD': '12345',
             // mysqlworkbench에서 login한 password
             'HOST': 'localhost',
             'PORT': ''
         }
     }
     ```

   * 다시 한 번 `python manage.py migrate`를 해주면 **django-mysql을 연동할 수 있다.**

