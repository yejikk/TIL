# Service worker



## Service worker란?

- 브라우저의 백그라운드에서 실행되는 자바스크립 worker
- PWA는 네이티브 앱처럼 오프라인에서도 사용이 가능하고, Push 알림 기능도 사용할 수 있는데 이를 도와주는 것이 Service Worker이다.
- 웹 Push 알림, 백그라운드 동기화, 캐싱 등 기술적 기반을 제공한다.



## Cache

* 인터페이스는 [`ServiceWorker`](https://developer.mozilla.org/ko/docs/Web/API/ServiceWorker) 의 생명주기의 일부로 캐시 된 `Request`와 `Response`를 나타낸다.
* 도메인은 여러개의 이름이 지정된 `cache` 객체를 가질 수 있다.
* 기본적으로 오프라인 상태로 URL 접속을 하면 네트워크가 없기 때문에 접속할 수 없다는 메세지가 뜬다. 하지만 service worker의 캐싱을 사용하면 오프라인 환경에서 접속할 수 있다.



## Service worker 등록

* `navigator`란 현재 작동중인 브라우저에 대한 다양한 정보를 나타내는 객체이다.
* `service-worker.js` 는  `/scripts/` 디렉터리가 아닌 루트 디렉터리에서 제공된다. `service-worker`가 루트 디렉터리에 있다면 도메인에 있는 모든 웹페이지의 요청을 제어한다.
* `service worker`은 **도메인당 한 개만 등록**할 수 있다.

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
      console.log('Service worker registered.', reg);
    });
});
```



## Service worker Life Cycle

1. **등록**
   * 서비스 워커를 등록한다.

2. **설치** `Install`

   * `event.waitUntil()`
   * `self.skipWating()`

   ```javascript
   self.addEventListener('install', (event) => {
     event.waitUntil(
       caches.open(CACHE_NAME).then((cache) => {
         return cache.addAll(FILES_TO_CACHE);
       })
     );
     self.skipWaiting();
   });
   ```

3. **활성화** `activate`

   * cache의 이전 데이터를 정리하는 역할

   ```Javascript 
   self.addEventListener('activate', (event) => {
     console.log('[ServiceWorker] Activate');
     event.waitUntil(
       caches.keys().then((keyList) => {
         return Promise.all(keyList.map((key) => {
           if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
             return caches.delete(key);
           }
         }));
       })
     );
     self.clients.claim();
   });
   ```

   