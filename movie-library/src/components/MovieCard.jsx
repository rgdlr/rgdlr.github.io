import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMoviePoster } from "../utils/getMoviePoster";

export function MovieCard({ movie }) {
    const moviePoster = getMoviePoster(movie.poster_path, 300);

    return (
        <li className={style.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img
                    height={345}
                    width={230}
                    className={style.movieImage}
                    src={moviePoster}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}
