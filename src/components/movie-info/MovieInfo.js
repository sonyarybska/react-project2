import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDetails} from "../../services/movies.api";
import {PosterPreview} from "../poster-preview/PosterPreview";
import './MovieInfo.css'


export function MovieInfo({location: {state}}) {
    let {details} = useSelector(state => state.detailsReducer);
    let {theme} = useSelector(state => state.themeReducer);
    let dispatch = useDispatch();
    let url = 'https://image.tmdb.org/t/p/original/';


    useEffect(() => {
        dispatch(fetchDetails(state))
    }, [dispatch, state])


    return (
        <div className={`main ${theme}-main`}>

            {details.backdrop_path ?
                <div>
                    <div className={'photo_container'}>
                        <div className={'darker'}>
                            <div className={'back-photo'}>
                                {details.backdrop_path ? <img src={url + details.backdrop_path} alt=""/> :
                                    <img src={'nophoto.jpg'} alt=""/>}
                            </div>
                        </div>
                        <div className={'poster'}>
                            {
                                details.poster_path ? <img src={url + details.poster_path} alt=""/> :
                                    <img src={'nophoto.jpg'} alt=""/>
                            }
                            <div>
                                {details.original_title}
                                <p>{details.tagline}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`info ${theme}-info`}>
                        <div className={'overview'}>
                            {details.release_date ? <span>{`${details.release_date.slice(0, 4)}, `}</span> : ''}
                            {details.genres?.map((value, index, array) => {
                                if (array[1]) {
                                    if (index < array.length - 1) {
                                        return <span key={value.id}>{`${value.name},`}</span>;
                                    }
                                }
                                return <span key={value.id}>{value.name}</span>;
                            })}
                            <p>
                                {details.runtime} minutes
                            </p>
                            <p>
                                {details.overview}
                            </p>
                            <PosterPreview id={state}/>
                        </div>
                        <div className={'facts'}>
                            <h3>Facts</h3>
                            {details.otiginal_title ?
                                <div><b>Original Title</b><p>{details.original_title}</p></div> : ''}
                            {details.status ? <div><b>Status</b><p>{details.status}</p></div> : ''}
                            {details.budget ? <div><b>Budget</b><p>{details.budget}</p></div> : ''}
                            {details.spoken_languages ? <div><b>Source language</b>
                                {details.spoken_languages?.map((value, index, array) => {
                                    if (array[1]) {
                                        if (index < array.length - 1) {
                                            return <div key={value.id}>{`${value.english_name},`}</div>;
                                        }
                                    }
                                    return <div key={value.id}>{value.english_name}</div>
                                })}
                            </div> : ''}
                        </div>
                    </div>

                </div> : ''
            }

        </div>
    )
}