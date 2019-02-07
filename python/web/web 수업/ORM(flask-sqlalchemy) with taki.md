# ORM(flask-sqlalchemy)

1. **기본 설정**

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
    
    '''
    아래가 중요함 
    class를 만들고, 이를 db에 반영한다.
    '''
    class User(db.Model): # db 상속받아서 쓰는 중
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(80), unique=True, nullable=False) 
        #  not null 조건
        email = db.Column(db.String(120), unique=True, nullable=False)
        password = db.Column(db.String(30))
        created_at = db.Column(db.String(80), nullable=False)
        
        def __init__(self, username, email):
            self.username = username
            self.email = email
            self.created_at = datetime.datetime.now().strftime("%D")
            
        def __repr__(self):
            return f'{self.id}: {self.username}'
   ```


2. **flask db 설정**

   * 초기 설정(`migration` 폴더 생성)

   ```bash
   $ flask db init
   ```

   * migration 파일 생성

   ```bash
   $ flask db migrate
   ```

   * db 반영

   ```bash
   $ flask db upgrade
   ```


3. **활용법**

   1. CREATE

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

   2. READ

      ```python
      # SELECT * FROM user
      users = User.query.all()
      
      # get 메소드는 primary key로 지정된 값을 통해 가져온다.
      user = User.query.get(1)
      
      # 특정 컬럼의 값을 가진 것을 가져오려면 다음과 같이 쓴다.
      # WHERE와 LIMIT가 붙어있는 것이라고 생각하면 된다.
      user = User.query.filter_by(username='이재찬').all()
      user = User.query.filter_by(username='이재찬').first()
      ```

   3. UPDATE

      ```python
      user = User.query.get(1)
      user.username = '홍길동'
      db.session.commit()
      ```

   4. DELETE

      ```python
      user = User.query.get(1)
      db.session.delete(user)
      db.session.commit()
      ```



#### 비밀번호 설정

```bash
pip install werkzeug
```

```python
from werkzeng.security import generate_password_hash, check_password_hash

a = 'hihi'
# 암호화
hash = generate_password_hash(a)
print(hash)
# 차이점 확인
check_password_hash(hash, 'hihi')
check_password_hash('hihi', hash)
```

