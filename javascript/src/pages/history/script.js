"use strict";

import { EVENT, HISTORY, initializeHistory } from "../../js/index.js";

const history = {
  back: window.document.querySelector(HISTORY.SELECTOR.BACK),
  forward: window.document.querySelector(HISTORY.SELECTOR.FORWARD),
  queryParameterForm: window.document.querySelector(HISTORY.SELECTOR.QUERY_PARAMETER_FORM),
  queryParameterButton: window.document.querySelector(HISTORY.SELECTOR.QUERY_PARAMETER_BUTTON),
  queryParameterInput: window.document.querySelector(HISTORY.SELECTOR.QUERY_PARAMETER_INPUT),
};

history.queryParameterForm.addEventListener(EVENT.SUBMIT, (event) => event.preventDefault());

initializeHistory(history);
