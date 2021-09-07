import {
    GET_GENRES, GET_GENRES_MOVIES,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT
} from "../actions/";

let initialState = {
    genres: [],
    genresMovies: [],
    currentPage: 1,
    totalCount: 0,
    perPage: 20,
}
export let genresMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {...state, genres: action.payload}
        case GET_GENRES_MOVIES:
            return {...state, genresMovies: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        default:
            return {...state}
    }
}