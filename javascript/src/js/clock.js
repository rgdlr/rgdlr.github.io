"use strict";

export const INTERVAL_TIMEOUT_MILLISECONDS = 1000;

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

export function updateClock(clock) {
  updateClockTime(clock);
  setInterval(() => updateClockTime(clock), INTERVAL_TIMEOUT_MILLISECONDS);
}
