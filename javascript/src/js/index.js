"use strict";

import "./import.js";
export * from "./import.js";

import "./event.js";
export * from "./event.js";

import "./attribute.js";
export * from "./attribute.js";
import "./cache.js";
export * from "./cache.js";
import "./callback.js";
export * from "./callback.js";
import "./canvas.js";
export * from "./canvas.js";
import "./cookie.js";
export * from "./cookie.js";
import "./device.js";
export * from "./device.js";
import "./dragAndDrop.js";
export * from "./dragAndDrop.js";
import "./element.js";
export * from "./element.js";
import "./file.js";
export * from "./file.js";
import "./fileReader.js";
export * from "./fileReader.js";
import "./history.js";
export * from "./history.js";
import "./indexedDb.js";
export * from "./indexedDb.js";
import "./intersectionObserver.js";
export * from "./intersectionObserver.js";
import "./keyboard.js";
export * from "./keyboard.js";
import "./localStorage.js";
export * from "./localStorage.js";
import "./matchMedia.js";
export * from "./matchMedia.js";
import "./memoization.js";
export * from "./memoization.js";
import "./modal.js";
export * from "./modal.js";
import "./node.js";
export * from "./node.js";
import "./navigator.js";
export * from "./navigator.js";
import "./notification.js";
export * from "./notification.js";
import "./object.js";
export * from "./object.js";
import "./prototype.js";
export * from "./prototype.js";
import "./screen.js";
export * from "./screen.js";
import "./sessionStorage.js";
export * from "./sessionStorage.js";
import "./time.js";
export * from "./time.js";
import "./util.js";
export * from "./util.js";
import "./webWorker.js";
export * from "./webWorker.js";

import "./custom.js";
export * from "./custom.js";

// -----

import { importHtmlElements } from "./import.js";
import { applyCustom } from "./custom.js";

await importHtmlElements();
applyCustom();
