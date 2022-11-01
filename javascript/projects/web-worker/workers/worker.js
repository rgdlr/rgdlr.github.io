"use strict";

import { EVENT } from "../../../src/js/event.js";
import { Memoization } from "../../../src/js/memoization.js";
import { fibonacci } from "../../../src/js/util.js";

const memoizedFibonacci = new Memoization().measureUseCallback(fibonacci);

addEventListener(EVENT.MESSAGE, ({ data: { fibonacciRequest } }) => {
  if (!fibonacciRequest) {
    return postMessage({
      error: "Unknown request",
      receivedRequest: { fibonacciRequest },
      exampleRequest: { fibonacciRequest: 10 },
    });
  }
  const { cached, result, time } = memoizedFibonacci(fibonacciRequest);
  postMessage({ cached, fibonacciRequest, fibonacciResponse: result, time });
});
