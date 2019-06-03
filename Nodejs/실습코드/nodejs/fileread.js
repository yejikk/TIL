// file system 모듈을 불러온다.
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  console.log(data);
});