import {
    GET_DETAILS, GET_GENRES, GET_GENRES_MOVIES,
    GET_MOVIES,
    GET_POSTERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_DARK, SET_LIGHT, SET_VALUE, CLEAR_STATE, SET_LOGIN,
} from "./actionsTypes";


const getMovies=(data)=>{
    return {type: GET_MOVIES, payload: {...data}}
}
const getPosters=(data)=>{
    return {type: GET_POSTERS, payload: {...data}}
}
const getDetails=(data)=>{
    return {type: GET_DETAILS, payload: {...data}}
}

const setTotalCount=(count)=>{
    return {type: SET_TOTAL_COUNT, payload: count}
}
const setCurrentPage=(page)=>{
    return {type: SET_CURRENT_PAGE, payload: page}
}

const getGenres=(genres)=>{
    return {type: GET_GENRES, payload: [...genres]}
}
const getGenresMovies=(movies)=>{
    return {type: GET_GENRES_MOVIES, payload: [...movies]}
}
const setDark=(dark)=>{
    return {type:SET_DARK,payload:dark}
}
const setLight=(light)=>{
    return {type:SET_LIGHT,payload:light}
}
const setValue=(value)=>{
    return {type:SET_VALUE,payload:value}
}
const clearState=()=>{
    return {type:CLEAR_STATE}
}
const setLogin=(login)=>{
    return {type:SET_LOGIN,payload:{...login}}
}


export {getMovies,setTotalCount,setCurrentPage,getPosters,getDetails,getGenres,getGenresMovies,setDark,setLight,setValue,
clearState,setLogin}
