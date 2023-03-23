import style from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMoviePoster } from "../utils/getMoviePoster";

export function MovieDetails() {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setLoading(true);
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setLoading(false);
        });
    }, [movieId]);

    if (loading) return <Spinner />;

    const moviePoster = getMoviePoster(movie.poster_path, 500);

    return (
        <div className={style.detailsContainer}>
            <img
                className={`${style.col} ${style.movieImage}`}
                src={moviePoster}
                alt={movie.title}
            />
            <div className={`${style.col} ${style.movieDetails}`}>
                <p>
                    <strong>TITLE</strong>
                    <br />
                    {movie.title}
                </p>
                <p>
                    <strong>GENRE</strong>
                    <br />
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>DESCRIPTION</strong>
                    <br />
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
