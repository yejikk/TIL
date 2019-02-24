# 190207 ORM(sqlachemy)를 활용한 crud 실습

* ### ORM : query를 python object로 관리가 가능하다.

  * **Object-Relational Mapping**
    * ORM은 데이터베이스와 객체 지향 프로그래밍 언어간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다. (객체 관계 매핑)
    * 객체 지향 언어에서 사용할 수 있는 가상 객체 데이터베이스를 구축하는 방법이다.
  * 각각마다 select 등 언어가 다르기 때문에 ORM로 관리하면 python언어로 관리가 가능하기 때문에 편리하다.

* ### SQLAlchemy 

  * **sqlalchemy** 객체 관계형 매퍼는 데이터베이스 테이블을 이용해 **사용자가 정의한 python class 메소드(함수)와 각각의 행을 나타내는 인스턴스**로 표현된다,
  * 객체와 각 연관된 행들의 모든 변경점들이 자동으로 동기되어 인스턴스에 반영되고, 그와 동시에 사용자가 정의한 class와 각 class 사이에 정의된 관계에 대해 쿼리할 수 있는 시스템을 포함하고 있다.

* ### crud

  * **CREATE** : 생성
  * **READ** : 읽기
  * **UPDATE** : 갱신
  * **DELETE** : 삭제



## 실습

* #### 기본 설정

```bash
 $ pip install flask_sqlalchemy flask_migrate
```

```python
 # app.py
 from flask import Flask
 from flask_sqlalchemy import SQLAlchemy
 from flask_migrate import Migrate
 
 app = Flask(__name__) # flask 설정
 app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db_flask.sqlite3'
 db = SQLAlchemy(app) # db 설정
 migrate = Migrate(app, db)
```

```python
 '''
 class가 중요함 
 class를 만들고, 이를 db에 반영한다.
 '''
 class User(db.Model): # db를 상속받아서 쓴다.
     id = db.Column(db.Integer, primary_key=True)
     username = db.Column(db.String(80), unique=True, nullable=False) # not null 조건
     email = db.Column(db.String(120), unique=True, nullable=False)
     password = db.Column(db.String(30))
     created_at = db.Column(db.String(80), nullable=False)
     
     def __init__(self, username, email):
         self.username = username
         self.email = email
         self.created_at = datetime.datetime.now().strftime("%D")
         
     def __repr__(self):
         return f'{self.id}: {self.username}'
        # db에 추가되었을 때, return 값
```



* #### flask db 설정

  * 초기 설정 (`migration` 폴더 생성)

  ```bash
  $ flask db init
  ```

  * migration 파일생성
    * migration 파일은 version 관리처럼 쓰인다.

  ```bash
  $ flask db migrate
  ```

  * db 반영
    * migration 파일을 실제 db에 반영한다. (최종적으로 db에 반영)

  ```bash
  $ flask db upgrade
  ```



* #### 활용법 

  * python으로 객체를 조작한다. (객체와 db가 mapping 되어 있다.)
  * class 인스턴스를 만들어서 db에 추가한다.

1. **CREATE**

   * add와 commit을 해줘야지 db에 들어간다.
   * sqlite에 가서 SELECT * FROM user로 db에 저장되었는지 확인한다.

   ```python
   # user 인스턴스 생성
   user = User(username='이재찬', email='lee@lee')
   
   # db.session.add 명령어를 통해 추가
   # INSERT INTO user (username, email)
   # VALUES ('이재찬', 'lee@lee'); 와 동일하다.
   db.session.add(user)
   
   # db에 반영
   db.session.commit()
   ```

2. **READ**

   ```python
   # SELECT * FROM user
   users = User.query.all()
   
   # get 메소드는 primary key로 지정된 값을 통해 가져온다.
   # id만 들어갈 수 있음(primary key)
   # primary key로 출력하는 것이기 때문에 절대 list 형태로 출력되지 않음.
   user = User.query.get(1)
   
   # 특정 컬럼의 값을 가진 것을 가져오려면 다음과 같이 쓴다.(primary key가 아닌 것)
   # WHERE와 LIMIT가 붙어있는 것이라고 생각하면 된다.
   user = User.query.filter_by(username='이재찬').all()
   user = User.query.filter_by(username='이재찬').first()
   ```

3. **UPDATE**

   ```python
   user = User.query.get(1)
   user.username = '홍길동'
   db.session.commit()
   ```

4. **DELETE**

   ```python
   user = User.query.get(1)
   db.session.delete(user)
   db.session.commit()
   ```

   ```bash
   # user에 1: 주호를 저장해서 삭제함
   >>> user = User.query.get(1) 
   >>> user
   1: 주호
   >>> db.session.delete(user)
   >>> db.session.commit()
   # User.query.all()(db에 있는 모든 정보들)을 user에 저장해서 확인함
   >>> user = User.query.all()
   >>> user
   # User.query.all()은 list 형태로 보여줌 
   [2: edutak]
   ```


## 실습 심화

* **Method 관련**

```python
@app.route('/users/create', methods=["POST"]) 
# []로 받으면 여러개의 method 가능, post 방식의 요청이 /users/create로 옴.
def create_user():
    username = request.form.get('username') # 이재찬
    email = request.form.get('email') # lee@lee
    # user = User(username='이재찬', email='lee@lee')
    user = User(username=username, email=email)
    db.session.add(user)
    db.session.commit()
    return render_template('create.html', username=user.username, email=user.email)
# app.route()가 2번 있어야지 회원정보를 받아서 회원정보를 저장할 수 있다.
```



* **variable routing 사용하기**

```python
# variable routing을 해야지 값을 받을 수 있음. 
# <int:id> 같은 경우에는 primary key가 들어와야지 값이 보장된다.
@app.route('/users/read/<int:id>')
def read_user(id):
    user = User.query.get(id)
    return render_template('read.html', user=user)
```



* **redirect 사용하기**


```python
@app.route('/users/delete/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    flash(f'{user.username}이 삭제되었습니다.', 'warning')
    return redirect('/') 
	# redirect를 쓰면 해당 url로 돌아감
```



* **block** :  내용이 block body 지정해놓은 곳에 들어간다.

```html
{% extends 'base.html' %}

{% block title %}
회원가입 폼
{% endblock %}

{% block body %}
```



* **flash**
  * alart 사용하기 ! 그냥 알고 있으면 됨

