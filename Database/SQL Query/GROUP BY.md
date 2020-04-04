# GROUP BY



## GROUP BY 절

* `GROUP BY` 절은 데이터들을 원하는 그룹으로 묶을 수 있다.
* 나누고자 하는 그룹의 컬럼명을 `SELECT`절과 `GROUP BY`절 뒤에 추가하면 된다.
* 집계함수와 함께 사용되는 상수는 GROUP BY절에 추가하지 않아도 된다.



## GROUP BY 사용법

* **컬럼 그룹화**

  ```sql
  SELECT 컬럼 FROM 테이블 GROUP BY 그룹화할 컬럼
  ```

* **조건 처리 후 컬럼 그룹화**

  ```sql
  SELECT 컬럼 FROM 테이블 WHERE 조건식 GROUP BY 그룹화할 컬럼
  ```

* **컬럼 그룹화 후 조건 처리**

  ```sql
  SELECT 컬럼 FROM 테이블 GROUP BY 그룹화할 컬럼 HAVING 조건식
  ```

* **조건 처리 후에 컬럼 그룹화 후 조건 처리**

  ```sql
  SELECT 컬럼 FROM 테이블 WHERE 조건식 GROUP BY 그룹화할 컬럼 HAVING 조건식
  ```

* **ORDER BY가 존재하는 경우**

  ```sql
  SELECT 컬럼 FROM 테이블 GROUP BY 그룹화할 컬럼 ORDER BY 정렬할 컬럼
  ```

  