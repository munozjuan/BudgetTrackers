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