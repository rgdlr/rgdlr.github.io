"use strict";

// TODO : can not import from "./index.js" if using in workers
import { getTextFromArray } from "./util.js";

export const CACHE_OPERATIONS_CRUD = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete",
};

export const CACHE_OPERATIONS = {
  create: "add",
  read: "match",
  update: "put",
  delete: "delete",
};

function getCacheOperations() {
  return Object.values(CACHE_OPERATIONS_CRUD);
}

function isCacheOperation(operation) {
  return getCacheOperations().includes(operation);
}

function getCacheMultipleOperations() {
  return [CACHE_OPERATIONS_CRUD.CREATE, CACHE_OPERATIONS_CRUD.READ, CACHE_OPERATIONS_CRUD.DELETE];
}

function isCacheMultipleOperation(operation) {
  return getCacheMultipleOperations().includes(operation);
}

function getCacheOperation({ multiple, operation, request }) {
  const KEYS = "keys";
  const ALL = "All";

  if (!request && operation === CACHE_OPERATIONS_CRUD.READ) {
    return KEYS;
  }
  return `${CACHE_OPERATIONS[operation]}${multiple ? ALL : ""}`;
}

export async function getCache(cacheName) {
  // return await window.caches.open(cacheName);
  return await caches.open(cacheName);
}

export async function deleteCache(cacheName) {
  // return await window.caches.delete(cacheName);
  return await caches.delete(cacheName);
}

export async function useCache({
  cacheName,
  multiple = false,
  operation,
  options = { ignoreSearch: false, ignoreMethod: false, ignoreVary: false },
  request,
  response,
}) {
  // TODO : improve first 2 conditional checkings + operations
  if (!cacheName && operation === CACHE_OPERATIONS_CRUD.READ) {
    // return await window.caches.keys();
    return await caches.keys();
  }
  if (cacheName && !request && operation === CACHE_OPERATIONS_CRUD.DELETE) {
    // return await window.caches.delete(cacheName);
    return await caches.delete(cacheName);
  }

  const cache = await getCache(cacheName);
  if (!isCacheOperation(operation)) {
    throw Error(
      `invalid cache operation : '${operation}' should be one of : ${getTextFromArray(
        getCacheOperations()
      )}`
    );
  }
  if (multiple && !(isCacheMultipleOperation(operation) && Array.isArray(request))) {
    throw Error(
      `invalid cache operation : 'multiple' attribute should use operations : ${getTextFromArray(
        getCacheMultipleOperations()
      )} with an array of 'request'`
    );
  }

  // TODO : improve "cache.put()" function as done with "cache.delete()" making it possible to be multiple
  // TODO : could extend cache prototype with "cache.deleteAll()" and "cache.updateAll()" methods
  if (multiple && operation === CACHE_OPERATIONS_CRUD.DELETE) {
    return await request.forEach(async (element) => await cache.delete(element, options));
  }

  const cacheOperation = getCacheOperation({ multiple, operation, request });
  return await cache[cacheOperation](request, response ?? options);
}
