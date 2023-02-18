"use strict";

import { EVENT } from "../../../src/js/event.js";

// NOTE : this === self
// NOTE : script location in files tree is important for scope (where interception take place)
// NOTE : script location "/javascript/projects/web-worker/worker/" is not fetching data > no fetch intercepted

// TODO : use skipWaiting(), etc. improve ServiceWorker
// TODO : create realtime chat using serviceWorker

self.addEventListener(EVENT.INSTALL, (event) => {
  console.log("Service worker intercepted install", event);
});

self.addEventListener(EVENT.ACTIVATE, (event) => {
  console.log("Service worker intercepted activate", event);
});

self.addEventListener(EVENT.ERROR, (event) => {
  console.log("Service worker intercepted message", event);
});

self.addEventListener(EVENT.FETCH, (event) => {
  console.log("Service worker intercepted fetch", event);
});

self.addEventListener(EVENT.MESSAGE, (event) => {
  console.log("Service worker intercepted message", event);
});

self.addEventListener(EVENT.PERIODIC_SYNC, (event) => {
  console.log("Service worker intercepted periodic sync", event);
});

self.addEventListener(EVENT.PUSH, (event) => {
  console.log("Service worker intercepted push", event);
});

self.addEventListener(EVENT.SYNC, (event) => {
  console.log("Service worker intercepted sync", event);
});
