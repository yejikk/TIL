# python



1. **python은 interpreter 언어이다.**

2. **python은 어떻게 동작할까?**

   * 우리가 작성하는 python code를 bytecode로 컴파일하고 실행(interpreter)한다.

3. **python 장점**

   * 문법이 엄격하여 배우기 쉬워서 학습용으로 좋다.
   * 동적 타입으로 인해 유연하다.
     * 타입을 지정하지 않고 자유롭게 사용하여 편리하게 개발할 수 있다.
   * 실행 도중 오류가 발생할시 인터프리터 언어이기 때문에 바로 수정이 가능하는 등 문제에 대해 유연하게 대처할 수 있다.

4. **python 단점**

   * 느리다
     * 인터프리터 언어로 동작하는 스크립터 언어로 한줄한줄 번역하기 때문에 속도가 느리다. 
     * 반면 컴파일러는 한꺼번에 기계어로 번역하고 그에 대한 오류가 없을때 결과값을 내기 때문에 속도가 빠르다. 

5. 외부에서 불러오는 python 파일을 **모듈(module)**이라고 부른다.

6. 결과가 나올 때까지 코드 실행이 중단되는것을 **blocking I/O**라고 부른다.

7. **python 비동기 모듈 asyncio (네이티브 코루틴)**

   * 멀티태스킹이 가능한 함수 코루틴 => asyncio를 사용하여 네이티브 코루틴을 사용한다.
   * await는 코루틴 안에서 다른 코루틴을 사용하기 위한 예약어
   * run_in_executor
     * python의 모든 함수가 비동기적 함수가 아니기 때문에 일반 함수도 코루틴으로 사용하고 싶다면 run_in_executor를 사용할 수 있다. (네이티브 코루틴 안에서 블로킹 I/O 함수를 실행)

   ```python
   from time import time
   from urllib.request import Request, urlopen
   import asyncio
    
   urls = ['https://www.google.co.kr/search?q=' + i
           for i in ['apple', 'pear', 'grape', 'pineapple', 'orange', 'strawberry']]
    
   async def fetch(url):
       request = Request(url, headers={'User-Agent': 'Mozilla/5.0'})    # UA가 없으면 403 에러 발생
       response = await loop.run_in_executor(None, urlopen, request)    # run_in_executor 사용
       page = await loop.run_in_executor(None, response.read)           # run in executor 사용
       return len(page)
    
   async def main():
       futures = [asyncio.ensure_future(fetch(url)) for url in urls]
                                                              # 태스크(퓨처) 객체를 리스트로 만듦
       result = await asyncio.gather(*futures)                # 결과를 한꺼번에 가져옴
       print(result)
    
   begin = time()
   loop = asyncio.get_event_loop()          # 이벤트 루프를 얻음
   loop.run_until_complete(main())          # main이 끝날 때까지 기다림
   loop.close()                             # 이벤트 루프를 닫음
   end = time()
   print('실행 시간: {0:.3f}초'.format(end - begin))
   ```

   ```text
   [89556, 88682, 89925, 90164, 90513, 93965]
   실행 시간: 1.737초
   ```