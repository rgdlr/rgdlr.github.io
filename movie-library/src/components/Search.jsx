import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    const handleOnSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className={style.searchContainer} onSubmit={handleOnSubmit}>
            <div className={style.searchBox}>
                <input
                    className={style.searchInput}
                    type="text"
                    placeholder="Search movie"
                    aria-label="Search movie"
                    value={search ?? ""}
                    onChange={(event) => {
                        const value = event.target.value;
                        history.push(
                            /^\s*$/.test(value) ? "" : `?search=${value}`
                        );
                    }}
                />
                <FaSearch size={20} color="darkred" className={style.searchButton}/>
            </div>
        </form>
    );
}
