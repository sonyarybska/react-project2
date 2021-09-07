import React, {createRef} from 'react';
import "./Header.css"
import {useDispatch, useSelector} from "react-redux";
import {getGenresMovies, getMovies, setDark, setLight, setValue} from "../../redux/actions/";

function Header() {
    let {theme} = useSelector(state => state.themeReducer);
    let {valueFinder} = useSelector(state => state.finderReducer);
    let {genresMovies} = useSelector(state => state.genresMoviesReducer);
    let {movies} = useSelector(state => state.moviesReducer);
    let dispatch = useDispatch();
    let login = JSON.parse(localStorage.getItem('login'))


    let myForm = (e) => {
        e.preventDefault();
        if (genresMovies) {
            dispatch(getGenresMovies(genresMovies.filter(value => value.original_title.includes(valueFinder))))
        }
        if (movies.results) {
            dispatch(getMovies({
                ...movies, results: movies?.results.filter(value => value.original_title.includes(valueFinder))
            }))
        }
        dispatch(setValue(''))
    };

    let changeForm = (e) => {
        dispatch(setValue(e.target.value))
    };

    let ref = createRef();
    return (
        <div className={`header ${theme}`}>
            <div className={`container`}>
                <div className={'logo'}>
                    <div className={`title`}>
                        <h1 className={'mainTitle'}>Pinball</h1>
                        <h4 className={'subTitle'}>The grid theme</h4>
                    </div>
                </div>
                <div>
                    <form onSubmit={myForm} className={'form'} action="">
                        <input className={'finder'} value={valueFinder} onChange={changeForm} type="text"
                               placeholder={'Find a movie'}/>
                        <i className="fas fa-search" aria-hidden={"true"}> </i>
                        <button>Search</button>
                    </form>
                </div>
                <div className={'user'}>
                    <img className={'imgUser'} src={login.url} alt=""/>
                    <p className={'nameUser'}>{login.name}</p>
                </div>
                <div>
                    <label className="switch">
                        <input ref={ref} type="checkbox"
                               onClick={() => ref.current.checked ? dispatch(setDark('dark')) : dispatch(setLight('light'))}
                               id="checkBox"/>
                        <span className="slider">{''}</span>
                    </label>
                </div>

            </div>

        </div>
    );
}

export default Header;