const c="cache",i=["/","/index.html","/index.js","assets/install-pc.png"],n=self;n.addEventListener("install",e=>{console.log("Service Worker 설치 중......",e),e.waitUntil(caches.open(c).then(t=>t.addAll(i))),n.skipWaiting()});n.addEventListener("activate",e=>{console.log("Service Worker 활성화됨.",e),e.waitUntil(caches.keys().then(t=>Promise.all(t.map(s=>{if(s!==c)return console.log("이전 캐시 삭제:",s),caches.delete(s)})))),n.clients.claim()});n.addEventListener("fetch",e=>{const t=caches.match(e.request).then(s=>s||fetch(e.request)).catch(()=>caches.match("/offline.html"));e.respondWith(t)});
