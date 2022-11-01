"use strict";

import {
  dedicatedWorker,
  EVENT,
  fibonacci,
  measureCallbackTime,
  sleep,
} from "../../src/js/index.js";

// TODO : same origin politic - when port is different from 5500
// const worker = dedicatedWorker({
//   scriptUrl: "http://localhost:5500/javascript/projects/web-worker/workers/worker.js",
//   message: { error: "error" },
//   callback: (event) => {
//     worker.terminate();
//     console.log(event.data, "received by script", "worker terminated by script");
//   },
// });

function showLoader(show, text) {
  const loader = window.document.querySelector(".web-worker-loader");
  show ? loader.removeAttribute("hidden") : loader.setAttribute("hidden", true);
  loader.querySelector(".web-worker-loader-text").textContent = text;
}

function showResult(number, result, time) {
  window.document.querySelector(".fibonacci-number").textContent = number;
  window.document.querySelector(".fibonacci-result").textContent = result;
  window.document.querySelector(".fibonacci-time").textContent = time;
  showLoader(false, "");
}

window.document
  .querySelector(".indexed-db-form.fibonacci-main")
  .addEventListener(EVENT.SUBMIT, (event) => {
    event.preventDefault();
    showLoader(true, "As operation is running in Main, you can not continue interacting");
    sleep(1).then(() => {
      const fibonacciMainInput = event.target.elements.fibonacciMain;
      const { result, time } = measureCallbackTime(fibonacci, fibonacciMainInput.value);
      showResult(fibonacciMainInput.value, result, time);
      fibonacciMainInput.value = "";
    });
  });

const fibonacciWorker = dedicatedWorker({
  scriptUrl: "/javascript/projects/web-worker/workers/worker.js",
  callback: (event) =>
    showResult(event.data.fibonacciRequest, event.data.fibonacciResponse, event.data.time),
});

window.document
  .querySelector(".indexed-db-form.fibonacci-worker")
  .addEventListener(EVENT.SUBMIT, (event) => {
    event.preventDefault();
    showLoader(true, "As operation is running in Worker, you can continue interacting");
    const fibonacciWorkerInput = event.target.elements.fibonacciWorker;
    fibonacciWorker.postMessage({ fibonacciRequest: fibonacciWorkerInput.value });
    fibonacciWorkerInput.value = "";
  });
