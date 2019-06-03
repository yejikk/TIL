var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C')
*/

console.log('A');
// Node.js야 니가 갖고있는 readFile 기능을 이용해서 'syntax/sample.txt' 파일을 읽어와!
// 다만 시간이 좀 걸리니까, 작업이 끝난 다음에 내가 너한테 전달해준 세번째 인자인 함수를 실행시켜 ^^
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('C');


