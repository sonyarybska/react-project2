import {useEffect} from "react";
import {fetchPosters} from "../../services/movies.api";
import {useDispatch, useSelector} from "react-redux";
import './PosterPreview.css';


export function PosterPreview({id}) {
    let {posters} = useSelector(state => state.detailsReducer)
    let dispatch = useDispatch();
    let url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        dispatch(fetchPosters(id))
    }, [dispatch, id]);

    return (
        <div className={'posters-img'}>
            {
                posters?.backdrops?.map((value, index) => index < 20 ?
                    <img key={index} src={url + value.file_path} alt=""/> : '')
            }
        </div>
    )
}