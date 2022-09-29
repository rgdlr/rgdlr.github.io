"use strict";

import { THEME, getTheme, setTheme } from "./index.js";

const themeSwitch = document.querySelector(".switch-checkbox");

export function setThemeForSwitch(theme) {
  if (theme === THEME.VALUES.DARK) {
    window.document.documentElement.style.setProperty(
      "--background-color-main",
      "var(--background-color-dark)"
    );
    window.document.documentElement.style.setProperty("--color-main", "var(--color-dark)");
    themeSwitch.checked = true;
  }
  if (theme === THEME.VALUES.LIGHT) {
    window.document.documentElement.style.setProperty(
      "--background-color-main",
      "var(--background-color-light)"
    );
    window.document.documentElement.style.setProperty("--color-main", "var(--color-light)");
    themeSwitch.checked = false;
  }
}

export function getThemeFromSwitch() {
  return themeSwitch.checked ? THEME.VALUES.DARK : THEME.VALUES.LIGHT;
}

setThemeForSwitch(getTheme());

themeSwitch.addEventListener("change", () => {
  const theme = getThemeFromSwitch();
  setTheme(theme);
  setThemeForSwitch(theme);
});
