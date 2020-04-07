# DNS

* `lookup`을 사용하여 조회하고자 하는 `url`을 입력하면 `ip주소`와 `protocol`을 얻을 수 있다.

  ```javascript
  const dns = require("dns");
  
  dns.lookup("google.com", (err, address, family) => {
    console.log(`address: ${address}, ${family}`);
  });
  
  // address: 172.217.31.142, 4
  ```

* `resolve4`를 사용 조회

  ```javascript
  const dns = require("dns");
  
  dns.resolve4("google.com", (err, addresses) => {
    if (err) throw err;
  
    // 객체를 string으로 변환
    const res = JSON.stringify(addresses);
    console.log(res);
  
    addresses.forEach((a) => {
      dns.reverse(a, (err, hostname) => {
        if (err) throw err;
  
        console.log(`revers for ${a}: ${hostname}`);
      });
    });
  });
  ```

  

