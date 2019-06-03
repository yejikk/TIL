// node가 실행되는 폴더를 기준으로 경로를 설정한다.
const testFolder = './data';  
// File System 모듈을 불러온다.
const fs = require('fs');

// function의 파라미터의 이름은 마음대로 해도 좋으나 순서는 반드시 지키자.
fs.readdir(testFolder, function(error, fileList) {
    console.log(fileList);
});