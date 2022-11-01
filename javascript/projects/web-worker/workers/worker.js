"use strict";

import { EVENT } from "../../../src/js/event.js";
import { Memoization } from "../../../src/js/memoization.js";
import { fibonacci } from "../../../src/js/util.js";

const memoization = new Memoization();

addEventListener(EVENT.MESSAGE, ({ data: { fibonacciRequest } }) => {
  if (!fibonacciRequest) {
    return postMessage({
      error: "Unknown request",
      receivedRequest: { fibonacciRequest },
      exampleRequest: { fibonacciRequest: 10 },
    });
  }
  const { cached, result, time } = memoization.measureUseMemo(fibonacci, fibonacciRequest);
  postMessage({ cached, fibonacciRequest, fibonacciResponse: result, time });
});
