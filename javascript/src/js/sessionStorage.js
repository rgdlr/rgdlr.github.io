"use strict";

export const THEME = {
  KEY: "theme",
  VALUES: {
    DARK: "dark",
    LIGHT: "light",
  },
};

export function setTheme(theme) {
  if (!Object.values(THEME.VALUES).includes(theme)) {
    throw `Error : unavailable theme : ${theme}`;
  }
  window.sessionStorage.setItem(THEME.KEY, theme);
}

export function getTheme() {
  return window.sessionStorage.getItem(THEME.KEY);
}
