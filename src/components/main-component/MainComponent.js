import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import {MoviesList} from "../movies-list/MoviesList";
import {GenresMoviesList} from "../genres-movies-list/GenresMoviesList";
import {MovieInfo} from "../movie-info/MovieInfo";


export function MainComponent() {

    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={`/main-page/details/:movie`} component={MovieInfo}/>
                    <Route exact path={`/main-page/:genres`} component={GenresMoviesList}/>
                    <MoviesList/>
                </Switch>
            </Router>
        </div>
    )
}