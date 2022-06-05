const staticSolity = "Solity-v1"
  const assets = [
    "/",
    "/1. PWA-Store/",
    "/assets/css/style.css",
    "/assets/css/style-prefix.css",
    "/assets/js/script.js",
    "/assets/img/logo/Codaxo-Icon.png",
  ]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSolity).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})