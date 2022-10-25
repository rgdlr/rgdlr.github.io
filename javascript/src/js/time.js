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

// TODO : decouple functionality, elements as arguments, classes outside, etc.

export function formatNumberDigitsFromNumber(number, minimumIntegerDigits = 2) {
  const LOCALES = "en-US";
  return number.toLocaleString(LOCALES, { minimumIntegerDigits, useGrouping: false });
}

export function formatNumberDigitsFromString(number, minimumIntegerDigits = 2) {
  const FILL_STRING = "0";
  return number.toString().padStart(minimumIntegerDigits, FILL_STRING);
}

export function getCurrentTime() {
  const time = new Date();
  return {
    hours: formatNumberDigitsFromNumber(time.getHours()),
    minutes: formatNumberDigitsFromNumber(time.getMinutes()),
    seconds: formatNumberDigitsFromNumber(time.getSeconds()),
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
