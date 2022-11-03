"use strict";

import { EVENT, throwEventCallback } from "./index.js";

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
  // TODO : get differences between "dedicatedWorker" and "sharedWorker"
  const sharedWorker = new window.SharedWorker(scriptUrl, options);
  message ? sharedWorker.postMessage(message) : undefined;
  sharedWorker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));
  return sharedWorker;
}

export async function serviceWorker({
  scriptUrl,
  options = {
    scope: undefined,
    type: "module" || "classic",
    updateViaCache: "all" || "imports" || "none",
  },
  callback,
  message,
}) {
  // TODO : improve service worker
  if (!("serviceWorker" in window.navigator)) {
    throw Error("service worker is not supported by navigator");
  }
  const worker = window.navigator.serviceWorker;

  const registerRegistration = await worker.register(scriptUrl, options);
  const readyRegistration = await worker.ready;

  console.log(registerRegistration, readyRegistration);

  const serviceWorker = readyRegistration.active;
  message ? serviceWorker.postMessage(message) : undefined;
  serviceWorker.addEventListener(EVENT.MESSAGE, (event) => throwEventCallback(callback, event));

  return worker;
}

export function abstractWorker({ scriptUrl, options }) {
  // TODO : auto-generated method stub
}
