import {getGenres, getGenresMovies, setTotalCount} from "../redux/actions/";
import {clearState} from "../redux/actions/actions";

const fetchGenres=()=> async(dispatch)=>{
    let response= await( await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e172755f61fa405d177a644a6c8c8cf5&language=en-US`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcyNzU1ZjYxZmE0MDVkMTc3YTY0NGE2YzhjOGNmNSIsInN1YiI6IjYwYzNkNTYzNWIzNzBkMDAzZjM2YzZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKns_MTZG3I_POKgJyT0OXNhzSQt39bf1ueHppU4Gr0',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json()
    dispatch(getGenres(response.genres))

}
const fetchGenresMovies=(id,currentPage)=>async(dispatch)=> {
    let response= await (await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&&page=${currentPage}&with_genres=${id}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcyNzU1ZjYxZmE0MDVkMTc3YTY0NGE2YzhjOGNmNSIsInN1YiI6IjYwYzNkNTYzNWIzNzBkMDAzZjM2YzZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKns_MTZG3I_POKgJyT0OXNhzSQt39bf1ueHppU4Gr0',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json()
    dispatch(getGenresMovies(response.results))
    dispatch(setTotalCount(response.total_results))
    dispatch(clearState())
}

export {fetchGenres,fetchGenresMovies};