"use strict";

import { EVENT, objectClassToSelector } from "./index.js";

const HISTORY_CLASS = {
  BACK: "history-back",
  FORWARD: "history-forward",
  QUERY_PARAMETER_FORM: "history-query-parameter-form",
  QUERY_PARAMETER_BUTTON: "history-query-parameter-button",
  QUERY_PARAMETER_INPUT: "history-query-parameter-input",
};

export const HISTORY = {
  CLASS: HISTORY_CLASS,
  DEFAULT: {
    DATA: {},
    TITLE: "deprecated",
    URL: "?",
  },
  SELECTOR: { ...HISTORY_CLASS, ...objectClassToSelector(HISTORY_CLASS) },
};

export function initializeHistory({ back, forward, queryParameterButton, queryParameterInput }) {
  back.addEventListener(EVENT.CLICK, (_event) => {
    historyGoBack();
  });
  forward.addEventListener(EVENT.CLICK, (_event) => {
    historyGoForward();
  });
  queryParameterButton.addEventListener(EVENT.CLICK, () =>
    historyReplaceState({
      data: queryParameterInput.value,
      title: "",
      url: queryParameterInput.value,
    })
  );
}

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

export function historyPushState({
  data = HISTORY.DEFAULT.DATA,
  title = HISTORY.DEFAULT.TITLE,
  url = HISTORY.DEFAULT.URL,
}) {
  window.history.pushState(data, title, url);
  return { href: window.location.href, state: window.history.state };
}

export function historyReplaceState({
  data = HISTORY.DEFAULT.DATA,
  title = HISTORY.DEFAULT.TITLE,
  url = HISTORY.DEFAULT.URL,
}) {
  window.history.replaceState(data, title, url);
  return { href: window.location.href, state: window.history.state };
}

export function onHistoryPopState(callback) {
  window.addEventListener(EVENT.POP_STATE, callback);
}
