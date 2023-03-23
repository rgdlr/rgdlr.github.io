import style from "./MoviesGrid.module.css";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        const path = search
            ? `/search/movie?query=${search}&page=${page}`
            : `/discover/movie?page=${page}`;
        get(path).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setMore(data.page < data.total_pages);
            setLoading(false);
        });
    }, [search, page]);

    if (!loading && movies.length === 0) return <Empty />;

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={more}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={style.movieGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );
}
