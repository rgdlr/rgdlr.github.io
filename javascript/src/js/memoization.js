"use strict";

export class Memoization {
  cache = {};

  constructor() {}

  useMemo(callback, parameters) {
    if (parameters in this.cache) {
      return this.cache[parameters];
    }
    this.cache[parameters] = callback(parameters);
    return this.cache[parameters];
  }

  measureUseMemo(callback, parameters) {
    const start = new Date().getTime();
    if (parameters in this.cache) {
      const end = new Date().getTime();
      return { cached: true, result: this.cache[parameters], time: end - start };
    }
    this.cache[parameters] = callback(parameters);
    const end = new Date().getTime();
    return { cached: false, result: this.cache[parameters], time: end - start };
  }
}
