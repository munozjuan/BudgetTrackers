const FILES_TO_CACHE = [
    "/", "/index.html","index.js", "/db.js", "/style.css"];

    const CACHE_NAME = "static-cache-v2";
    const DATA_CACHE_NAME = "data-cache-v1";

  // install function
  self.addEventListener("install", function(evt){
      evt.waitUntil(
          caches.open(CACHE_NAME).then(cache =>{
              console.log("Files were pre-cached!");
              return cache.addAll(FILES_TO_CACHE);
          })
      );

      self.skipWaiting();
    });

// activate
self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });