const CACHE_NAME = "cache";
const ASSETS_TO_CACHE = ["/", "/index.html", "/index.js", "assets/install-pc.png"];

const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener("install", (e) => {
  console.log("Service Worker 설치 중......", e);
  // sw.skipWaiting(); // 즉시 활성화
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
  sw.skipWaiting();
});

sw.addEventListener("activate", (e) => {
  console.log("Service Worker 활성화됨.", e);

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("이전 캐시 삭제:", cache);
            return caches.delete(cache);
          }
        }),
      );
    }),
  );

  sw.clients.claim();
});

// fetch 이벤트에서 캐시된 파일을 제공하거나, 네트워크 요청 수행
sw.addEventListener("fetch", (e: FetchEvent) => {
  const response = caches
    .match(e.request)
    .then((cacheResponse) => cacheResponse || fetch(e.request))
    .catch(() => caches.match("/offline.html") as Promise<Response>);

  e.respondWith(response);
});

// sw.addEventListener("message", (event) => {
//   console.log("메인 페이지로부터 받은 메시지:", event.data);

//   // 메인 페이지로 응답 전송
//   event.source?.postMessage("Service Worker로부터의 메시지!");
// });
