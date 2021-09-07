import {SET_LOGIN} from "../actions/actionsTypes";

let initialState = {
    login: {name: '', url: ''}
}
export let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: action.payload}
        default:
            return {...state}
    }
}