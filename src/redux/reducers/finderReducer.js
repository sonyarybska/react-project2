import {SET_VALUE} from "../actions/";

let initialState = {
    valueFinder: ''
}
export let finderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {...state, valueFinder: action.payload};
        default:
            return {...state}
    }
}