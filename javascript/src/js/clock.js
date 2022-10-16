"use strict";

import { objectClassToSelector } from "./index.js";

const CLOCK_CLASS = {
  HOURS: "clock-hours",
  MINUTES: "clock-minutes",
  SECONDS: "clock-seconds",
};

// Adding "...CLOCK_CLASS" helps with IDE autocomplete when accessing the object
export const CLOCK = {
  INTERVAL_TIMEOUT_MILLISECONDS: 1000,
  CLASS: CLOCK_CLASS,
  SELECTOR: { ...CLOCK_CLASS, ...objectClassToSelector(CLOCK_CLASS) },
};

export function formatNumberDigits(number, minimumIntegerDigits = 2) {
  // const PAD_STRING = "0";
  // return number.toString().padStart(minimumIntegerDigits, PAD_STRING);
  return number.toLocaleString("en-US", { minimumIntegerDigits, useGrouping: false });
}

export function getCurrentTime() {
  const time = new Date();
  return {
    hours: formatNumberDigits(time.getHours()),
    minutes: formatNumberDigits(time.getMinutes()),
    seconds: formatNumberDigits(time.getSeconds()),
  };
}

export function updateClockTime(clockElements) {
  const { hours, minutes, seconds } = getCurrentTime();
  clockElements.hours.textContent = hours;
  clockElements.minutes.textContent = minutes;
  clockElements.seconds.textContent = seconds;
}

export function initializeClock(clock) {
  updateClockTime(clock);
  setInterval(() => updateClockTime(clock), CLOCK.INTERVAL_TIMEOUT_MILLISECONDS);
}
