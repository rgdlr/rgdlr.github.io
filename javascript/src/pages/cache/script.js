"use strict";

import { CACHE_OPERATIONS_CRUD, deleteCache, getServiceWorker, useCache } from "../../js/index.js";

// TODO : create cached website with offline access
// const serviceWorker = await getServiceWorker({
//   scriptUrl: "./sw.js",
//   callback: (event) => console.log(`Script received message response : ${event.data}`),
//   message: "Message to ServiceWorker",
// });

// const cacheName = "cache-test";

// const cacheCreate = await useCache({
//   cacheName,
//   request: ["index.html", "script.js", "style.css"],
//   multiple: true,
//   operation: CACHE_OPERATIONS_CRUD.CREATE,
// });

// // console.log(cacheCreate);

// const cacheUpdate = await useCache({
//   cacheName,
//   request: "index.html",
//   response: await fetch("index.html"),
//   operation: CACHE_OPERATIONS_CRUD.UPDATE,
// });

// // console.log(cacheUpdate);

// const cacheRead = await useCache({
//   cacheName,
//   request: "index.html",
//   operation: CACHE_OPERATIONS_CRUD.READ,
// });

// // console.log(cacheRead);

// const cacheDelete = await useCache({
//   cacheName,
//   request: ["index.html", "script.js", "style.css"],
//   multiple: true,
//   operation: CACHE_OPERATIONS_CRUD.DELETE,
// });

// // console.log(cacheDelete);

// await deleteCache(cacheName);
