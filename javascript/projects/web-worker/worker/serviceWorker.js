"use strict";

import { EVENT } from "../../../src/js/event.js";

// NOTE : this === self
// TODO : add serviceWorker to "../script.js" + remove internal console + finish service worker actions
// TODO : create realtime chat using serviceWorker

self.addEventListener(EVENT.INSTALL, (event) => {
  console.log("Service worker intercepted install", event);
});

self.addEventListener(EVENT.INSTALLED, (event) => {
  console.log("Service worker intercepted installed", event);
});

self.addEventListener(EVENT.ERROR, (event) => {
  console.log("Service worker intercepted error", event);
});

self.addEventListener(EVENT.FETCH, (event) => {
  console.log("Service worker intercepted fetch", event);
});

self.addEventListener(EVENT.MESSAGE, (event) => {
  console.log("Service worker intercepted message", event);
});
