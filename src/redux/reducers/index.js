import {genresMoviesReducer} from "./genresMoviesReducer";
import {moviesReducer} from "./moviesReducer";
import {combineReducers} from "redux";
import {themeReducer} from "./themeReducer";
import {finderReducer} from "./finderReducer";
import {detailsReducer} from "./detailsReducer";
import {loginReducer} from "./loginReducer";


export let reducer = combineReducers({
    genresMoviesReducer,
    moviesReducer,
    themeReducer,
    finderReducer,
    detailsReducer,
    loginReducer
});
