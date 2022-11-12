"use strict";

import { EVENT, fibonacci, getDedicatedWorker, Memoization, sleep } from "../../src/js/index.js";

// TODO : same origin politic - when port is different from 5500
// const worker = dedicatedWorker({
//   scriptUrl: "http://localhost:5500/javascript/projects/web-worker/dedicatedWorkerworker.js",
//   message: { error: "error" },
//   callback: (event) => {
//     worker.terminate();
//     console.log(event.data, "received by script", "worker terminated by script");
//   },
// });

const memoizedFibonacci = new Memoization().measureUseCallback(fibonacci);

function showLoader(show, text) {
  const loader = window.document.querySelector(".web-worker-loader");
  show ? loader.removeAttribute("hidden") : loader.setAttribute("hidden", true);
  loader.querySelector(".web-worker-loader-text").textContent = text;
}

function showResult(number, result, time, cached) {
  window.document.querySelector(".fibonacci-number").textContent = number;
  window.document.querySelector(".fibonacci-result").textContent = result;
  window.document.querySelector(".fibonacci-time").textContent = time;
  const cache = window.document.querySelector(".fibonacci-cached");
  cached ? cache.removeAttribute("hidden") : cache.setAttribute("hidden", true);
  showLoader(false, "");
}

window.document
  .querySelector(".indexed-db-form.fibonacci-main")
  .addEventListener(EVENT.SUBMIT, (event) => {
    event.preventDefault();
    showLoader(true, "As operation is running in Main, you can not continue interacting");
    sleep(1).then(() => {
      const fibonacciMainInput = event.target.elements.fibonacciMain;
      const fibonacciNumber = fibonacciMainInput.value;
      const { cached, result, time } = memoizedFibonacci(fibonacciNumber);
      showResult(fibonacciNumber, result, time, cached);
      fibonacciMainInput.value = "";
    });
  });

const dedicatedWorker = getDedicatedWorker({
  scriptUrl: "/javascript/projects/web-worker/worker/dedicatedWorker.js",
  callback: ({ data: { fibonacciRequest, fibonacciResponse, time, cached } }) =>
    showResult(fibonacciRequest, fibonacciResponse, time, cached),
});

window.document
  .querySelector(".indexed-db-form.fibonacci-worker")
  .addEventListener(EVENT.SUBMIT, (event) => {
    event.preventDefault();
    showLoader(true, "As operation is running in Worker, you can continue interacting");
    const fibonacciWorkerInput = event.target.elements.fibonacciWorker;
    dedicatedWorker.postMessage({ fibonacciRequest: fibonacciWorkerInput.value });
    fibonacciWorkerInput.value = "";
  });
