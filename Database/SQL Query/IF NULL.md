# IFNULL / IF

> 값이 없음을 의미하는 NULL
>
> NULL을 처리하는 방식 알아보기
>
> IF 사용하는 방식 알아보기



1. **컬럼 값이 NULL인 것을 찾을 때**

   * `is NULL`을 사용

   ```sql
   SELECT 컬럼 FROM 테이블 WHERE 컬럼 is NULL;
   ```

2. **컬럼 값이 NULL이 아닌 것을 찾을 때**

   * `is NOT NULL` 을 사용

   ```sql
   SELECT 컬럼 FROM 테이블 WHERE 컬럼 is NOT NULL;
   ```

3. **IFNULL**

   * 만약, NULL이라면 IFNULL(value1, value2)
   * NULL이 아니라면 value1, NULL이라면 value2 출력

   ```sql
   SELECT ANIMAL_TYPE, IFNULL(NAME,'No name') AS NAME, SEX_UPON_INTAKE FROM ANIMAL_INS ORDER BY ANIMAL_ID;
   ```

4. **IF**

   * 조건을 처리하는 IF문
   * 컬럼을 지정할 때, IF를 사용하여 조건을 나타내고 참, 거짓값을 출력할 수 있다.

   ```sql
   SELECT IF(조건, 참, 거짓) FROM 테이블;
   ```

   * 특정 문자열이 있는지 확인할 때는 `'%단어%'`를 사용한다.