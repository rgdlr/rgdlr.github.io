"use strict";

import { HISTORY, initializeHistory } from "../../src/js/index.js";

const history = {
  back: window.document.querySelector(HISTORY.SELECTOR.BACK),
  forward: window.document.querySelector(HISTORY.SELECTOR.FORWARD),
  queryParameterButton: window.document.querySelector(HISTORY.SELECTOR.QUERY_PARAMETER_BUTTON),
  queryParameterInput: window.document.querySelector(HISTORY.SELECTOR.QUERY_PARAMETER_INPUT),
};

initializeHistory(history);
