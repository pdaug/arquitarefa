const cacheName = "v1";

const cachedAssets = [ "/", "/style.css" ];

self.addEventListener("install", function(event) {

    async function preCache() {

        const cache = await caches.open(cacheName);

        return cache.addAll(cachedAssets);

    }

    event.waitUntil(preCache());

});
