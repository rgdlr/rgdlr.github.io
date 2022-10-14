"use strict";

export function objectTransform(
  object,
  { transformKeyCallback = (key) => key, transformValueCallback = (value) => value }
) {
  return Object.entries(object).reduce(
    (object, [key, value]) => ({
      ...object,
      [transformKeyCallback(key)]: transformValueCallback(value),
    }),
    {}
  );
}

export function objectKeysToUpperCase(object) {
  return objectTransform(object, { transformKeyCallback: (key) => key.toUpperCase() });
}

export function objectKeysToLowerCase(object) {
  return objectTransform(object, { transformKeyCallback: (key) => key.toLowerCase() });
}

export function objectValuesToUpperCase(object) {
  return objectTransform(object, { transformValueCallback: (value) => value.toUpperCase() });
}

export function objectValuesToLowerCase(object) {
  return objectTransform(object, { transformValueCallback: (value) => value.toLowerCase() });
}

export function objectClassToSelector(object) {
  return objectTransform(object, { transformValueCallback: (value) => `.${value}` });
}

export function objectSelectorToClass(object) {
  const REMOVE_DOT_CLASS_SELECTOR = 1;
  return objectTransform(object, {
    transformValueCallback: (value) => value.substring(REMOVE_DOT_CLASS_SELECTOR),
  });
}
