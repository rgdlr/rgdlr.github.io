"use strict";

// TODO : try changing to a function returning a function after type checking - similar to useMemo
export function throwCallback(callback) {
  if (typeof callback !== "function") {
    throw Error("callback is not a function");
  }
  return callback();
}

export function throwEventCallback(callback, event) {
  if (typeof callback !== "function") {
    throw Error("callback is not a function");
  }
  if (typeof event === "undefined") {
    throw Error("event is undefined");
  }
  return callback(event);
}

export function measureCallbackTime(callback, parameters) {
  const start = new Date().getTime();
  const result = throwEventCallback(callback, parameters);
  const end = new Date().getTime();
  return { result, time: end - start };
}

export function delayCallback({ callback = () => {}, delay = 0, promise = false }) {
  if (promise) {
    return new Promise((resolve, _reject) =>
      delayCallback({
        callback: () => resolve(throwCallback(callback)),
        delay,
      })
    );
  }
  const delayTimeout = setTimeout(() => {
    clearTimeout(delayTimeout);
    throwCallback(callback);
  }, delay);
}

export async function sleep(milliseconds) {
  await delayCallback({ delay: milliseconds, promise: true });
}

// TODO : remove - usage example function
async function example() {
  const callback = () => console.log(new Date());
  const delay = 1000;
  let counter = 1;

  await delayCallback({ delay: delay * counter, promise: true });
  callback();

  await sleep(delay * counter);
  callback();

  delayCallback({ delay: delay * counter++, promise: true }).then(callback);
  sleep(delay * counter++).then(callback);

  delayCallback({ callback, delay: delay * counter++ });
}
