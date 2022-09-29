"use strict";

import { updateClock } from "../../src/js/index.js";

const clock = {
  hours: window.document.querySelector(".clock-hours"),
  minutes: window.document.querySelector(".clock-minutes"),
  seconds: window.document.querySelector(".clock-seconds"),
};

updateClock(clock);
