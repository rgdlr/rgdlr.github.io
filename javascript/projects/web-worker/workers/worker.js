"use strict";

import { EVENT } from "../../../src/js/event.js";

addEventListener(EVENT.MESSAGE, (event) => {
  console.log(event.data, "received by worker");
  postMessage(event.data);
  console.log(event.data, "send by worker");
});
