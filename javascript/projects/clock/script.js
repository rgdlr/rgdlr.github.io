"use strict";

import { CLOCK, initializeClock } from "../../src/js/index.js";

const clock = {
  hours: window.document.querySelector(CLOCK.SELECTOR.HOURS),
  minutes: window.document.querySelector(CLOCK.SELECTOR.MINUTES),
  seconds: window.document.querySelector(CLOCK.SELECTOR.SECONDS),
};

initializeClock(clock);
