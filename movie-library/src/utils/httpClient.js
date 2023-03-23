import tmdb from "../data/tmdb.json";

const { url, v4_token } = tmdb.api;

export function get(path) {
  return fetch(`${url}${path}`, {
    headers: {
      Authorization: `Bearer ${v4_token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
}
