"use strict";

import { EVENT, throwCallback, throwEventCallback } from "./index.js";

export function dedicatedWorker({
  scriptUrl,
  options = {
    type: "module" || "classic",
    credentials: "omit" || "same-origin" || "include",
    name: undefined,
  },
  callback,
  message,
}) {
  const worker = new window.Worker(scriptUrl, options);
  message ? worker.postMessage(message) : undefined;
  worker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));
  return worker;
}

export function sharedWorker({
  scriptUrl,
  options = {
    type: "module" || "classic",
    credentials: "omit" || "same-origin" || "include",
    name: undefined,
  },
  callback,
  message,
}) {
  // TODO : auto-generated method stub
  const sharedWorker = new window.SharedWorker(scriptUrl, options);
  message ? sharedWorker.postMessage(message) : undefined;
  sharedWorker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));
  return sharedWorker;
}

export function serviceWorker({ scriptUrl, options }) {
  // TODO : auto-generated method stub
}

export function abstractWorker({ scriptUrl, options }) {
  // TODO : auto-generated method stub
}
