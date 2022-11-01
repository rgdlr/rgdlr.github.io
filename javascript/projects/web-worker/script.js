"use strict";

import { CLOCK, dedicatedWorker, sleep } from "../../src/js/index.js";

const STOPWATCH = {
  BUTTON: {
    START: "START",
    STOP: "STOP",
  },
  DEFAULT: {
    HOURS: "00",
    MINUTES: "00",
    SECONDS: "00",
  },
  ELEMENTS: {
    HOURS: window.document.querySelector(CLOCK.SELECTOR.HOURS),
    MINUTES: window.document.querySelector(CLOCK.SELECTOR.MINUTES),
    SECONDS: window.document.querySelector(CLOCK.SELECTOR.SECONDS),
  },
  INTERVAL: undefined,
};

console.log({ ...STOPWATCH.BUTTON }, "sent by script");

const worker = dedicatedWorker({
  scriptUrl: "http://localhost:5500/javascript/projects/web-worker/workers/worker.js",
  message: { ...STOPWATCH.BUTTON },
  callback: async (event) => {
    console.log(event.data, "received by script");
    await sleep(3000);
    worker.terminate();
    console.log("worker terminated by script");
  },
});

const fibonacciWorker = dedicatedWorker({
  scriptUrl: "http://localhost:5500/javascript/projects/web-worker/workers/worker.js",
  message: { fibonacciRequest: 40 },
  callback: (event) => {
    console.log("fibonacciWorker:", event.data.fibonacciResponse);
    fibonacciWorker.terminate();
    console.log("fibonacciWorker terminated by script");
  },
});

// TODO : same origin politic - when port is different from 5500
