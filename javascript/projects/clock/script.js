"use strict";

const INTERVAL_TIMEOUT_MILLISECONDS = 1000;

const clock = {
  hours: window.document.querySelector(".clock-hours"),
  minutes: window.document.querySelector(".clock-minutes"),
  seconds: window.document.querySelector(".clock-seconds"),
};

function formatNumberDigits(number, minimumIntegerDigits = 2) {
  //   return number.toLocaleString("en-US", { minimumIntegerDigits, useGrouping: false });
  return number.toString().padStart(minimumIntegerDigits, "0");
}

function getCurrentTime() {
  const time = new Date();
  return {
    hours: formatNumberDigits(time.getHours()),
    minutes: formatNumberDigits(time.getMinutes()),
    seconds: formatNumberDigits(time.getSeconds()),
  };
}

function updateClockTime() {
  const { hours, minutes, seconds } = getCurrentTime();
  clock.hours.textContent = hours;
  clock.minutes.textContent = minutes;
  clock.seconds.textContent = seconds;
}

updateClockTime();
setInterval(updateClockTime, INTERVAL_TIMEOUT_MILLISECONDS);
