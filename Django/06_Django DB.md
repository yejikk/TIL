# 190312 데이터베이스(Django)

## 데이터베이스 무결성

1. 개체 무결성
   - Primary Key
   - 모든 레코드에는 Not Null, Unique  가지는 값이 반드시 있다.
2. 참조 무결성
   - 참조하고 있는 값(FK : 다른 테이블의 PK)이 수정 혹은 삭제가 되었을 때, 아래와 같이 할 수 있다.
     - CASCADE : 삭제가 되었을 때 해당하는 값을 가지는 모든 레코드를 삭제
       - 예) 게시글 삭제시 모든 댓글 삭제
     - SET_NULL : 해당하는 값을 모두 NULL로 지정(NOT NULL 조건이 있는 경우 쓸 수 없음)
     - SET_DEFAULT :  해당하는 값을 모두 DeFault 값으로 지정 (반드시 DeFault 값이 지정되어야지 사용할 수 있다.)
     - PROTECT : 참조하는 대상이 있는 경우 (댓글이 있는 경우) 삭제를 방지 -> 오류발생
     - SET() : Django에서 특정 함수를 호출할 수 있음
3. 도메인 무결성(속성)
   - NOT NULL 
   - INT, VARCHAR, TEXT, BOOL, DATETIME
   - Male/Felmale



## 데이터 베이스 일대다 관계

> 게시글(1) - 댓글(N)

1. `models.py` 설정

   ```python
   class Comment(models.Model):
       content = models.CharField(max_length=100)
       created_at = models.DateTimeField(auto_now_add=True)
       updated_at = models.DateTimeField(auto_now=True)
       board = models.ForeignKey(Board, on_delete=models.CASCADE)
   ```

2. migrate

   ```bash
   $ python manage.py makemigrations
   $ python manage.py showmigrations
   $ python manage.py migrate
   ```

   * boards_comment 테이블 생성 쿼리 확인

     ```bash
     $ python manage.py sqlmigrate boards 0002
     ```

     ```sqlite
     CREATE TABLE "boards_comment" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "content" varchar(100) NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "board_id" integer NOT NULL REFERENCES "boards_board" ("id") DEFERRABLE INITIALLY DEFERRED);
     ```

   * 실제 데이터베이스 확인

     ```bash
     $ sqlite3 db.sqlite3
     >> SELECT * FROM boards_comment;
     ```

     | id   | content | created_at | updated_at | board_id |
     | ---- | ------- | ---------- | ---------- | -------- |
     | 1    | 1번댓글 | 시간       | 시간       | 3        |

     * 실제 데이터베이스에는 `모델명_id` 로 컬럼이 추가되어 있으며, 값은 해당하는 id가 됨.
       * 예) `board_id` 

3. shell_plus 확인

   * 쉘 실행

     ```bash
     $ python manage.py shell_plus
     ```

   * 게시글 작성

     ```bash
     >> board = Board(title='제목', content='내용')
     >> board.save()
     >> board.pk
     1
     ```

   * 댓글 작성

     ```bash
     >> board = Board.objects.get(pk=1)
     >> comment = Comment(content='댓글', board=board)
     >> comment.save()
     >> comment.pk
     1
     ```

     * 댓글을 저장할 때, Board의 객체의 오브젝트를 저장

   * 관계 활용하기

     * board(1) -> comment(N) (1 대 다) : `comment_set` 

     ```bash
     >> board = Board.objects.get(pk=1)
     >> board.comment_set.all()
     <QuerySet [<Comment: 댓글1>, <Comment: 댓글2>]
     ```

     * comment(N) -> board(1) : `board`

       ```bash
       >> comment = Comment.objects.get(pk=1)
       >> comment.board
       <Board: 1번글>
       >> comment.board_id
       
       ```
