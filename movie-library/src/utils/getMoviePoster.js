import posterPlaceholder from "../images/posterPlaceholder.jpg";

export function getMoviePoster(path, width) {
    return path
        ? `https://image.tmdb.org/t/p/w${width}${path}`
        : posterPlaceholder;
}
