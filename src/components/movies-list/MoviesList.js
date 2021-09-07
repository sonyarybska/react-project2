import './MoviesList.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../movies-list-card/MoviesListCard";
import {Pagination} from "../pagination/Pagination";
import {GenreBadge} from "../genre-badge/GenreBadge";
import {fetchMovies} from "../../services/movies.api";


export function MoviesList() {
    let {currentPage, movies, totalCount, perPage} = useSelector(state => state.moviesReducer);
    let {theme} = useSelector(state => state.themeReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [currentPage, dispatch]);

    return (
        <div>
            <div className={`${theme}-movie`}>
                <GenreBadge/>
                <div className={`movies-container`}>
                    {
                        movies.results?.map(value => <MoviesListCard key={value.id} oneMovie={value}/>)
                    }
                </div>
                <Pagination currentPage={currentPage} totalCount={totalCount} perPage={perPage}/>
            </div>
        </div>
    )
}