import {useDispatch, useSelector} from "react-redux";
import {GenreBadge} from "../genre-badge/GenreBadge";
import {Pagination} from "../pagination/Pagination";
import {useEffect} from "react";
import {fetchGenresMovies} from "../../services/genres.api";
import {GenresMoviesListCard} from "../genres-movies-list-card/GenresMoviesListCard";


export function GenresMoviesList({location: {state}}) {
    let {currentPage, totalCount, perPage, genresMovies} = useSelector(state => state.genresMoviesReducer)
    let dispatch = useDispatch();
    let {theme} = useSelector(state => state.themeReducer);

    useEffect(() => {
        dispatch(fetchGenresMovies(state, currentPage))
    }, [currentPage, dispatch, state]);

    return (
        <div>

            <div className={`${theme}-movie`}>
                <GenreBadge/>
                <div className={`movies-container`}>
                    {
                        genresMovies.map(value => <GenresMoviesListCard key={value.id} oneCard={value}/>)
                    }
                </div>

                <Pagination currentPage={currentPage} totalCount={totalCount} perPage={perPage} p/>
            </div>

        </div>
    )
}