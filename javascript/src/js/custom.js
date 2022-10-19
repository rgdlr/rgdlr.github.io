"use strict";

import { EVENT, getTheme, setTheme, THEME } from "./index.js";

export function getThemeFromSwitch(themeSwitch) {
  return themeSwitch.checked ? THEME.VALUES.DARK : THEME.VALUES.LIGHT;
}

export function updateThemeForSwitchByPrefersColorScheme(themeSwitch) {
  const colorMain = getComputedStyle(document.documentElement).getPropertyValue("--color-main");
  const prefersColorSchemeDark = colorMain.trim() === "#eee";
  themeSwitch.checked = prefersColorSchemeDark;
}

export function setLightThemeForSwitch(themeSwitch) {
  window.document.documentElement.style.setProperty(
    "--background-color-main",
    "var(--background-color-light)"
  );
  window.document.documentElement.style.setProperty(
    "--background-color-main-alpha",
    "var(--background-color-light-alpha)"
  );
  window.document.documentElement.style.setProperty("--color-main", "var(--color-light)");
  window.document.documentElement.style.setProperty(
    "--color-main-alpha",
    "var(--color-light-alpha)"
  );
  themeSwitch.checked = false;
}

export function setDarkThemeForSwitch(themeSwitch) {
  window.document.documentElement.style.setProperty(
    "--background-color-main",
    "var(--background-color-dark)"
  );
  window.document.documentElement.style.setProperty(
    "--background-color-main-alpha",
    "var(--background-color-dark-alpha)"
  );
  window.document.documentElement.style.setProperty("--color-main", "var(--color-dark)");
  window.document.documentElement.style.setProperty(
    "--color-main-alpha",
    "var(--color-dark-alpha)"
  );
  themeSwitch.checked = true;
}

export function setThemeForSwitch(theme, themeSwitch) {
  if (!theme || !themeSwitch) return;

  if (theme === THEME.VALUES.LIGHT) {
    setLightThemeForSwitch(themeSwitch);
  }
  if (theme === THEME.VALUES.DARK) {
    setDarkThemeForSwitch(themeSwitch);
  }
}

const themeSwitch = window.document.querySelector(".switch-checkbox");
themeSwitch.addEventListener(EVENT.CHANGE, () => {
  const theme = getThemeFromSwitch(themeSwitch);
  setThemeForSwitch(theme, themeSwitch);
  setTheme(theme);
});

updateThemeForSwitchByPrefersColorScheme(themeSwitch);
setThemeForSwitch(getTheme(), themeSwitch);

const themeSwitchCircle = window.document.querySelector(".switch-circle");
themeSwitchCircle.style.display = "grid";

// TODO : use initial modal window to choose language + use multi-language
