# Blob

> Blob을 사용하여 이미지를 Database에 저장하는 방법에 대해 알아본다.

> **Blob = Binary Large Objects = 대용량 바이너리 객체**
>
> 이미지, 비디오, 사운드 등과 같은 멀티미디어 객체들을 텍스트가 아닌 바이너리 데이터로 사용할 수 있는 객체를 말한다.
>
> 주로 데이터의 크기(Byte) 및 MIME 타입을 알아내거나, 데이터를 송수신을 위한 작은 Blob 객체로 나누는 등의 작업에 사용한다.



## Blob 생성

```javascript
const blob = new Blob(array, options);
```



## Blob URL

1. `window.URL.createObjectURL`
   * `URL.createObjectURL`은 Blob 객체를 가리키는 URL을 포함한 `Blob:URL`형태의 DOM String을 생성한다.
   * 생성된 Blob URL은 생성된 window와 document에서만 유효하기 때문에 다른 window에서 활용이 불가하다.
   * URL의 수명이 한정되어있어서 보안 이슈에서 벗어날 수 있다.
   * **Blob URL은 `<img src="">` 에 넣어서 사용할 수 있다.**
     * 이 Blob URL을 database에 저장하여 사용한다.

2. `window.URL.revokeObjectURL` 
   * `URL.createObjectURL()`을 통해 생성한 기존 URL을 해제한다.

 

