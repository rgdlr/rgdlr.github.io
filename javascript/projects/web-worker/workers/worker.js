"use strict";

import { measureCallbackTime } from "../../../src/js/callback.js";
import { EVENT } from "../../../src/js/event.js";
import { fibonacci } from "../../../src/js/util.js";

addEventListener(EVENT.MESSAGE, (event) => {
  if (!event.data.fibonacciRequest) {
    return postMessage({
      error: "Unknown request",
      receivedRequest: event.data,
      exampleRequest: { fibonacciRequest: 10 },
    });
  }
  const { result, time } = measureCallbackTime(fibonacci, event.data.fibonacciRequest);
  postMessage({ fibonacciRequest: event.data.fibonacciRequest, fibonacciResponse: result, time });
});
