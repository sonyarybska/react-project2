import {SET_DARK, SET_LIGHT} from "../actions/";

let initialState = {
    theme: 'light'
}
export let themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DARK:
            return {...state, theme: action.payload}
        case SET_LIGHT:
            return {...state, theme: action.payload};
        default:
            return {...state}
    }
}