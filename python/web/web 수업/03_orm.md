orm : query를 파이썬 오브젝트로 관리가 가능하다.

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__) # flask 설정
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db_flask.sqlite3'
db = SQLAlchemy(app) # db 설정

migrate = Migrate(app, db)

class User(db.Model): # db 상속받아서 쓰는 중
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False) # not null 조건
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username
```



* pip install flask_sqlalchemy flask_migrate 설치하기 (모듈 사용을 위해서)

* flask init

* flask db migrate

: class 내용을 db에 반영하기 위해 준비

: migration 파일은 version 관리처럼 쓰인다



*  flask db upgrade

: migration 파일을 실제 db에 반영한다. (최종적으로  db에 반영)



파이썬으로 객체를 조작함 (객체와 db가 맵핑 되어있음.)

클래스 인스턴스를 만들어서 db에 추가함

```python
>>> user1 = User(username='승만', email='no@no')
>>> db.session.add(user1)
>>> db.session.commit()

add랑 commit을 꼭 해줘야지 db에 들어감
sqlite에 가서 SELECT * FROM user로 db에 저장되었는지 확인한다.
```



* 아이디를 가져올 때는 get을 씀

```python
User.query.get(2)
```



* id로 가져와서 db에서 삭제하기

```python
>>> user = User.query.get(1)
>>> user
1: 주호
>>> db.session.delete(user)
>>> db.session.commit()
>>> user = User.query.all()
>>> user
[2: edutak]
```



* c(create), r(read), d(delete), u(update) 과정이 어떻게 되는지 알아보기



* update하기

```python
>>> u1 = User.query.get(2)
>>> u1
2: edutak
>>> u1.username = 'tak'
>>> db.session.commit()
```

