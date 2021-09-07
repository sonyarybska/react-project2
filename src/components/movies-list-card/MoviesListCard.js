import "./MoviesListCard.css";

import {
    Link
} from "react-router-dom";

import {Rating} from "react-simple-star-rating";
import {useSelector} from "react-redux";

export function MoviesListCard({oneMovie}) {
    let url = 'https://www.themoviedb.org/t/p/original/';
    let rating = oneMovie.vote_average * 5 / 10;
    let {theme} = useSelector(state => state.themeReducer);

    return (
        <div className={`oneMovie ${theme}-movie-card`}>
            <Link to={{pathname: `/main-page/details/${oneMovie.original_title}`, state: oneMovie.id}}>
                <div className={'movie-card'}>
                    {oneMovie.poster_path ? <img src={url + oneMovie.poster_path} alt=""/> :
                        <img src={'nophoto.jpg'} alt=""/>}
                    <span>{oneMovie.original_title}({oneMovie.release_date?.slice(0, 4)})</span>
                    <div>
                        <Rating stars={5} ratingValue={rating}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}