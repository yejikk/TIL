# 5. 사용자로부터 정보 받기

사용자로부터 정보를 받기 위해서 HTML의 `form` 태그를 활용한다.

실제로, 네이버/구글 등 모든 사이트에서 사용자(클라이언트)가 제출하는 내용들을 모두 `<form>` 태그 안에있다.



### 1. `form` 보여주는 페이지(메뉴등록페이지)

```python
@app.route("/menu/add")
def menu_add():
    return render_template("menu_add.html")
```

```html
<form action="/menu/create">
    메뉴를 입력하세요 : <input type="text" name="menu">
    <input type="submit">
</form>
```

* form 태그 작성시 반드시 중요한 것들!!
  * 1. 입력 받을 `input` 태그
    2. 변수명 : `input`  태그의 `name`
    3. 정보를 받아서 처리할 경로 : `form` 태그의 `action` 

### 2. 정보를 받아서 처리할 경로 (txt파일에 저장)

```python
# "/menu/create"는 form 태그에서 action에 정의한 url (매칭되는 것을 기억)
from flask import request

@app.route("/menu/create")
def menu_create():
    # "menu"는 input 태그에서 name에 정의한 내용
    request.args.get("menu")
    with open("menu.txt", "a") as file:
        file.write()
    return f"{menu}가 등록되었습니다."
```

