import {Link} from "react-router-dom";
import {Rating} from "react-simple-star-rating";
import "./../movies-list-card/MoviesListCard.css"
import {useSelector} from "react-redux";


export function GenresMoviesListCard({oneCard}) {
    let url = 'https://www.themoviedb.org/t/p/original/';
    let rating = oneCard.vote_average * 5 / 10;
    let {theme} = useSelector(state => state.themeReducer);

    return (
        <div className={`oneMovie ${theme}-movie-card`}>
            <Link to={{pathname: `/main-page/details/${oneCard.original_title}`, state: oneCard.id}}>
                <div className={'movie-card'}>
                    {oneCard.poster_path ? <img src={url + oneCard.poster_path} alt=""/> :
                        <img src={'nophoto.jpg'} alt=""/>}
                    <span> {oneCard.original_title}({oneCard.release_date?.slice(0, 4)})</span>
                    <div>
                        <Rating stars={5} ratingValue={rating}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}