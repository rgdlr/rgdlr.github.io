"use strict";

import { EVENT } from "./event.js";

export function getHistory() {
  return window.history;
}

export function getHistoryLength() {
  return window.history.length;
}

export function getHistoryState() {
  return window.history.state;
}

export function historyGoBack() {
  window.history.back();
  return window.location.href;
}

export function historyGoForward() {
  window.history.forward();
  return window.location.href;
}

export function historyGo(delta) {
  window.history.go(delta);
  return window.location.href;
}

export function historyPushState({ data, title, url }) {
  const _data = data ?? {};
  const _title = title ?? "unused";
  const _url = url ?? "?url";
  window.history.pushState(_data, _title, _url);
  return { href: window.location.href, state: window.history.state };
}

export function historyReplaceState({ data, title, url }) {
  const _data = data ?? {};
  const _title = title ?? "unused";
  const _url = url ?? "?url";
  window.history.replaceState(_data, _title, _url);
  return { href: window.location.href, state: window.history.state };
}

export function onHistoryPopState(callback) {
  window.addEventListener(EVENT.POP_STATE, callback);
}
