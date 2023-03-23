import style from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./pages/NotFound";

export function App() {
    return (
        <Router basename={'/movie-library/app'}>
            <header>
                <Link to="/">
                    <h1 className={style.title}>Movie Library</h1>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <MovieDetails />
                    </Route>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/">
                        <NotFound />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
