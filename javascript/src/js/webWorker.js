"use strict";

import { EVENT, throwEventCallback, watchPosition } from "./index.js";

export function getDedicatedWorker({
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

export function getSharedWorker({
  scriptUrl,
  options = {
    type: "module" || "classic",
    credentials: "omit" || "same-origin" || "include",
    name: undefined,
  },
  callback,
  message,
}) {
  // TODO : get differences between "dedicatedWorker" and "sharedWorker"
  const sharedWorker = new window.SharedWorker(scriptUrl, options);
  message ? sharedWorker.postMessage(message) : undefined;
  sharedWorker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));
  return sharedWorker;
}

export async function getServiceWorker({
  scriptUrl,
  options = {
    scope: undefined,
    type: "module" || "classic",
    updateViaCache: "imports" || "all" || "none",
  },
  callback,
  message,
}) {
  if (!window.navigator.serviceWorker) {
    throw Error("service worker is not supported by navigator");
  }

  const worker = window.navigator.serviceWorker;
  const workerRegistration =
    (await worker.getRegistration(scriptUrl)) ?? (await worker.register(scriptUrl, options));

  const workerReady = await worker.ready;
  const serviceWorker = workerRegistration.active;

  worker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));
  message ? serviceWorker.postMessage(message) : undefined;

  return serviceWorker;
}

export function getAbstractWorker({ scriptUrl, options }) {
  // TODO : auto-generated method stub
}
