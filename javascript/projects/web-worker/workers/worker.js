"use strict";

import { EVENT } from "../../../src/js/event.js";

function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

addEventListener(EVENT.MESSAGE, (event) => {
  if (event.data.START && event.data.STOP) {
    console.log(event.data, "received by worker");
    postMessage(event.data);
    console.log(event.data, "send by worker");
  }
  if (event.data.fibonacciRequest) {
    postMessage({ fibonacciResponse: fibonacci(event.data.fibonacciRequest) });
  }
});
