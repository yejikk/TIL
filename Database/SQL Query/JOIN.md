# JOIN

> 테이블 사이에서 원하는 데이터를 출력할 수 있는 방법



<img width="683" alt="join" src="https://user-images.githubusercontent.com/45961217/78472601-36a6c700-7775-11ea-9340-4115c68de23f.png">



## 1. LEFT JOIN

* A, B 테이블 중 A값의 전체와 A와 B값이 같은 것을 리턴한다.

  ```sql
  SELECT 컬럼 FROM A as a LEFT JOIN B as b ON a.id = b.id;
  ```

* 순수 A 테이블의 값만 리턴하기

  ```sql
  SELECT 컬럼 FROM A as a LEFT JOIN B as b ON a.id = b.id WHERE b IS NULL;
  ```

  

## 2. RIGHT JOIN

* LEFT JOIN과 방향만 다르다.
* 만약, A와 B 테이블 중 B의 값 전체와 A와 B값이 같은 것을 리턴한다.

```sql
SELECT 컬럼 FROM A as a RIGHT JOIN B as b ON a.id = b.id;
```



## 3. INNER JOIN

* ID 값이 서로 중복되는 것을 리턴한다.

```sql
SELECT 컬럼 FROM A as a INNER JOIN b as b ON a.id = b.id;
```



## 4. FULL OUTER JOIN

* A, B 전체 테이블의 값을 리턴한다.
* 하지만 mysql에는 `FULL OUTER JOIN`이 없기 때문에, `LEFT JOIN과 RIGHT JOIN 그리고 UNION`을 사용하여 이를 대체한다.

```sql
SELECT 컬럼 FROM A as a LEFT JOIN B as b ON a.id = b.id UNION SELECT 컬럼 FROM A as a RIGHT JOIN B as b ON a.id = b.id;
```