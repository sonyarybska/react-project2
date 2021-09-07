import {
    CLEAR_STATE,
    GET_DETAILS, GET_POSTERS,

} from "../actions/";

let initialState = {
    details: {},
    posters: [],
}
export let detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {...state, details: action.payload}
        case CLEAR_STATE:
            return {...state, details: {}, posters: []}
        case GET_POSTERS:
            return {...state, posters: action.payload}
        default:
            return {...state}
    }
}