"use strict";

export const LANGUAGE = {
  KEY: "language",
  VALUES: {
    DEFAULT: window.navigator.language,
    ENGLISH: "en",
    SPANISH: "es",
  },
};

export function setLanguage(language) {
  if (!Object.values(LANGUAGE.VALUES).includes(language)) {
    throw new Error(`Unavailable language : ${language}`);
  }
  window.localStorage.setItem(LANGUAGE.KEY, language);
}

export function getLanguage() {
  return window.localStorage.getItem(LANGUAGE.KEY);
}
