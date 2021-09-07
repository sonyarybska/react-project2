import {
    GET_MOVIES,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,

} from "../actions/";

let initialState = {
    movies: {},
    currentPage: 1,
    totalCount: 0,
    perPage: 20,
}
export let moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        default:
            return {...state}
    }
}