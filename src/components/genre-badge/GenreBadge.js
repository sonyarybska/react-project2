import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGenres} from "../../services/genres.api";
import {setCurrentPage} from "../../redux/actions";
import './GenreBadge.css'
import {Link} from "react-router-dom";


export function GenreBadge() {
    let {genres} = useSelector(state => state.genresMoviesReducer);
    let {theme} = useSelector(state => state.themeReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <div className={`genres`}>
            <Link to={`/main-page`}>
                <div onClick={() => dispatch(setCurrentPage(1))} className={`badge ${theme}-badge`}>All films</div>
            </Link>

            {
                genres.map(value => <Link key={value.id} to={{pathname: `/main-page/${value.name}`, state: value.id}}>
                    <div onClick={() => dispatch(setCurrentPage(1))}
                         className={`badge ${theme}-badge`}>{value.name}</div>
                </Link>)
            }

        </div>
    )
}