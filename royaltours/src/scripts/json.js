export async function fetchJson(url) {
  const response = await fetch(url);
  return await response.json();
}

function fetchJsonCached() {
  const cache = {};
  return async (url) => {
    if (url in cache) {
      return cache[url];
    }
    cache[url] = await fetchJson(url);
    return cache[url];
  };
}

export const fetchJsonWithCache = fetchJsonCached();

export function fetchJsonPromise(url) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      resolve(json);
    } else {
      reject(`GET ${url} ${response.status} ${response.text}`);
    }
  });
}
