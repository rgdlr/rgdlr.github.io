"use strict";

import { CACHE_OPERATIONS_CRUD, useCache } from "../../js/cache.js";
import { EVENT } from "../../js/event.js";

const cacheName = "cache/v1";

self.addEventListener(EVENT.INSTALL, async (event) => {
  console.log("Service worker intercepted install");
  console.log("Service worker caching web page");
  await useCache({
    cacheName,
    request: ["index.html", "script.js", "style.css"],
    multiple: true,
    operation: CACHE_OPERATIONS_CRUD.CREATE,
  });
});

self.addEventListener(EVENT.ACTIVATE, async (event) => {
  console.log("Service worker intercepted activate");
  const cacheKeys = await useCache({
    operation: CACHE_OPERATIONS_CRUD.READ,
  });
  cacheKeys.forEach(async (cacheKey) => {
    if (cacheKey !== cacheName) {
      await useCache({
        cacheName: cacheKey,
        operation: CACHE_OPERATIONS_CRUD.DELETE,
      });
    }
  });
  // caches
  //   .keys()
  //   .then((keys) =>
  //     Promise.all(keys.forEach((cache) => (cache !== cacheName ? caches.delete(cache) : undefined)))
  //   );
});

self.addEventListener(EVENT.FETCH, async (event) => {
  if (event.request.destination === "image") {
    console.log(
      `Service worker intercepted fetch : ${event.request.destination} : ${event.request.url}`
    );
  }
  // TODO : caching web page not working properly
  // await useCache({
  //   cacheName,
  //   request: event.request,
  //   operation: CACHE_OPERATIONS_CRUD.CREATE,
  // });
  // const cacheResponse = await caches.match(event.request);
  // event.respondWith(async () => (cacheResponse ? cacheResponse : event.request));
});

self.addEventListener(EVENT.MESSAGE, ({ data, source }) => {
  console.log(`Service worker intercepted message : ${data}`);
  source.postMessage(data);
});
