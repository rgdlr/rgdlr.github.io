"use strict";

import { EVENT, historyGoBack, historyGoForward, historyReplaceState } from "../../src/js/index.js";

const history = {
  back: window.document.querySelector(".history-back"),
  forwards: window.document.querySelector(".history-forward"),
};

const queryParameterInput = window.document.querySelector(".history-query-parameter-input");
const queryParameterButton = window.document.querySelector(".history-query-parameter-button");

history.back.addEventListener(EVENT.CLICK, (_event) => {
  historyGoBack();
});

history.forwards.addEventListener(EVENT.CLICK, (_event) => {
  historyGoForward();
});

queryParameterButton.addEventListener(EVENT.CLICK, () =>
  historyReplaceState({
    data: queryParameterInput.value,
    title: "",
    url: queryParameterInput.value,
  })
);
