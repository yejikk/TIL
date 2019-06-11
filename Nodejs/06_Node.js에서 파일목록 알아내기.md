# 06. Node.js에서 파일목록 알아내기

> Node.js에서 특정 디렉토리 하위에 있는 파일과 디렉토리의 목록을 알아내는 방법 알아보기

* `main.js`

  ```javascript
  <ul>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  ```

  * 만약 list를 추가 한다면 계속해서 위 code에 있는 li tag를 계속해서 수정해야 될 것이다.
    * 어떠한 것(예를 들어 파일)이 추가, 생성, 삭제 되었을 때 번거롭다는 이야기 이다.
  * 이러한 수고를 덜기 위하여 파일 목록을 알아낸다



## 파일 목록 알아내기

> data 폴더 하위에 있는 파일들이 사라지거나 추가될 때, node.js를 통해 알아내는 방법

* `nodejs` 폴더에 `readdir.js` file 생성

  ```javascript
  // node가 실행되는 폴더를 기준으로 경로를 설정한다.
  // 현재 디렉토리에 있는 data 폴더
  var testFolder = './data';
  var fs = require('fs');
   
  fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
  })
  ```

  ```bash
  $ node nodejs/readdir.js
  [ 'CSS', 'HTML', 'JavaScript' ]
  ```

  * `readdir.js`를 실행시킨다면 현재 디렉토리에 있는 data 폴더안에 있는 filelist를 출력한다.
    * 결과 값은 배열 형태로 출력되며, 이러한 배열을 반복문을 통해 어떠한 결과물을 만들어 낼 것이다.

