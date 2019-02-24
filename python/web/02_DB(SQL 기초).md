# 190129 DB (SQL 기초)

* #### 데이터 베이스(DB)

  * 체계화 된 데이터의 모임
  * 여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합

* #### RDBMS (관계형데이터베이스 관리 시스템)

  * 관계형 모델을 기반으로 하는 데이터베이스 관리시스템이다.

* #### SQLite

  * 서버가 아닌 응용 프로그램에 넣어 사용하는 비교적 가벼운 **데이터 베이스**
  * 구글 안드로이드 운영체제에 기본적으로 탑재된 데이터베이스이며, 임베디드 소프트웨에도 많이 활용이 되고 있다.
  * 로컬에서 간단한 DB를 구성 할 수 있으며, 오픈소스 프로젝트이기 때문에 자유롭게 사용할 수 있다.



## 기본 용어 정리

#### 1) 스키마 (scheme)

* 데이터 베이스에서 자료의 구조, 표현방법, 관계등을 정의한 구조이다. (데이터 베이스의 구조와 제약 조건에 관련한 전반적인 명세를 기술한 것이다.

#### 2) 열(column) 

* 각 열에는 **고유한 데이터 형식**이 지정된다.

- INTEGER, TEXT, NULL 등

#### 3) 행(row) 

* 테이블의 **데이터가 저장**된다. 

- user라는 테이블에 4명의 고객정보가 있다면, 행은 4개가 존재한다.

#### 4) PK(기본키) 

* 각 행의 **고유값**으로 PRIMARY KEY라고 불린다. 반드시 설정해야하며, 데이터베이스 관리 및 관계 설정시 주요하게 활용된다.



## SQL

* #### SQL이란?

  * 관계형 데이터 베이스 관리시스템(RDBMS)의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어이다.
  * 관계형 데이터베이스 관리 시스템에서 자료의 검색과 관리, 데이터베이스 스키마 생성과 수정, 데이터 베이스 객체 접근 조정 관리를 위해 고안되었다.



* #### SQL문법

  **1) DDL (데이터 정의 언어)**

  * **데이터를 정의**하기 위한 언어이다.
  * 관계형 데이터 베이스 구조(테이블, 스키마)를 정의하기 위한 명령어이다.
  * **CREATE** (테이블 생성), **DROP**, **ALTER**



  **2) DML (데이터 조작 언어)**

  * **데이터를 저장, 수정, 삭제, 조회** 등을 하기 위한 언어이다.
  * **INSERT, UPDATE, DELETE, SELECT**



  **3) DCL (데이터 제어 언어)**

  * 데이터베이스 **사용자의 권한 제어**를 위해 사용되는 언어이다.
  * GRANT, REVOKE, COMMIT, ROLLBACK



## DB, Table 생성

#### 1) database 생성

* $sqlite3 database

```sqlite
$ sqlite3 tutorial.sqlite3 
sqlite> .databases
```

* .databases를 통해 db가 생성되었는지 확인할 수 있다.



#### 2) Table 생성

```sql
CREATE TABLE tablename (
	column1 datatype PRIMARY KEY,
    column2 INTEGER,
    column3 TEXT
);
```

* .tables를 통해 table이 생성되었는지 확인할 수 있다.
* .schema tablename : 특정 테이블 스키마를 확인할 수 있다.



#### 3) Table 삭제

```sql
DROP TABLE tablename;
```

* .tables를 통해 table이 삭제되었는지 확인할 수 있다.
  * 아무것도 뜨지 않으면 제대로 삭제된 것이다.



#### * DB와 Table의 관계

* MOVIE RECOMMANDATION SERVICE라는 DB가 있다면, 그 안에 user, moveis, movie_rates라는 정보의 Table이 들어있다.



## 데이터 추가, 읽기, 수정, 삭제

#### 1) data 추가

```sql
INSERT INTO tablename (column1, column2, ...)
VALUES (value1, value2, ...)
```

* 특정 table에 **새로운 행**을 추가하여 데이터를 추가할 수 있다.

* **모든 열**에 데이터를 넣을 때에는 **column을 명시할 필요가 없다**.

  * **INSERT INTO** tablename **VALUES** (value1, value2, ...)

* ##### PRIMARY KEY는 반드시 필요하며, 값이 저장되면 자동으로 증가하도록 한다.

  * ##### AUTOINCREMENT 사용! (INTEGER TYPE에서만 가능하다.)

* Type 옆에 **NOT NULL**을 추가하면 절대 공백으로 두어서는 안된다.



#### 2) data 가져오기

```sql
SELECT * FROM tablename;
```

*  *을 쓰는 것은 table에 있는 모든 data를 가져오겠다는 뜻이다.

```sql
SELECT column1, column2 FROM tablename;
```

* 특정한 table에서 특정 column만 가져온다.

```SQL
SELECT column1, column2 FROM tablename LIMIT num;
```

* 특정한 table에서 특정 column값 중에서 num개만큼만 정보를 가져온다.

```sql
SELECT column1, column2 FROM tablename LIMIT num OFFSET num;
```

* 특정한 table에서 특정 column값 중에서 위에서부터 num개 가져온다.

```SQL
SELECT column1, column2 FROM tablename WHERE column=value
```

* 특정한 table에서 특정 column에서 특정한 값만 가져온다.



#### 3) data 삭제

```sql
DELETE FROM table WHERE condition
```

* 특정 table에 특정한 레코드(행)을 삭제한다.



#### 4) data 수정

```sql
UPDATE tablename SET column1=value1, column2=value2 WHERE condition
```

* 특정 table에 특정한 레코드를 수정할 수 있다.



## WHERE, expression

#### * csv 파일을 가지고 와서 database로 만들기

```sql
sqlite> .mode csv
sqlite> .import users.csv users
```



#### * WHERE

```SQL
SELECT * FROM tablename WHERE condition
```

* 특정한 table에서 특정 조건의 column만 가져오기

```sql
SELECT * FROM tablename WHERE condition1 and condition2
```

* and를 사용해서 2개의 조건도 사용가능



#### * 나머지 표현식들

#### 1) COUNT

```SQL
SELECT COUNT(column) FROM tablename
```

* 레코드의 갯수를 반환한다.



#### 2) AVG, SUM, MIN, MAX

```SQL
SELECT AVG(column) FROM tablename : 평균 구하기

SELECT SUM(column) FROM tablename : 합 구하기

SELECT MIN(column) FROM tablename : 최소값 구하기

SELECT MAX(column) FROM tablename : 최대값 구하기
```

* 위 표현들은 모두 INTEGER일 때만 가능하다.
* **WHERE을 사용해서 조건도 넣어서 값을 구할 수 있다.**



#### 3) LIKE

```SQL
SELECT * FROM tablename WHERE colunms LIKE 2% 
: 2로 시작하는 값

SELECT * FROM tablename WHERE colunms LIKE %2 
: 2로 끝나는 값

SELECT * FROM tablename WHERE colunms LIKE %2% 
: 2가 들어가는 값

SELECT * FROM tablename WHERE colunms LIKE _2% 
: 아무 값이나 들어가고 두번째가 2로 시작하는 값 (_와 %는 차이가 있음)

SELECT * FROM tablename WHERE colunms LIKE 1___
: 1로 시작하고 4자리인 값

SELECT * FROM tablename WHERE colunms LIKE 2_%_%
: 2로 시작하고 적어도 3자리인 값
```

* _는 자리수를 나타내기 때문에 %와 다르다
* %는 사이에 몇개이든지, 무엇이든지 다 들어갈 수 있다.



## ORDER

#### 1) 정렬

```SQL
ORDER BY column1, column2 ASC
: 오름차순 정렬

ORDER BY column1, column2 DESC
: 내림차순 정렬
```

