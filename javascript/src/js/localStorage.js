"use strict";

export const LANGUAGE = {
  KEY: "language",
  VALUES: {
    ENGLISH: "en",
    SPANISH: "es",
  },
};

export function setLanguage(language) {
  if (!Object.values(LANGUAGE.VALUES).includes(language)) {
    throw `Error : unavailable language : ${language}`;
  }
  window.localStorage.setItem(LANGUAGE.KEY, language);
}

export function getLanguage() {
  return window.localStorage.getItem(LANGUAGE.KEY);
}
