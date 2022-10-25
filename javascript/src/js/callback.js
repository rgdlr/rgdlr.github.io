"use strict";

import {} from "./index.js";

export function throwCallback(callback) {
  if (typeof callback === "function") {
    callback();
  }
}

export function throwEventCallback(callback, event) {
  if (typeof callback === "function" && typeof event !== "undefined") {
    callback(event);
  }
}
