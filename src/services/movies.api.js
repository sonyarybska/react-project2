import {clearState, getDetails, getMovies, getPosters, setTotalCount} from "../redux/actions/actions";

const fetchMovies = (page) => async (dispatch) => {
    let response = await (await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcyNzU1ZjYxZmE0MDVkMTc3YTY0NGE2YzhjOGNmNSIsInN1YiI6IjYwYzNkNTYzNWIzNzBkMDAzZjM2YzZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKns_MTZG3I_POKgJyT0OXNhzSQt39bf1ueHppU4Gr0',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json()
    dispatch(getMovies(response))
    dispatch(setTotalCount(response.total_results))
    dispatch(clearState())
}

const fetchPosters = (id) => async (dispatch) => {
    let response = await (await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcyNzU1ZjYxZmE0MDVkMTc3YTY0NGE2YzhjOGNmNSIsInN1YiI6IjYwYzNkNTYzNWIzNzBkMDAzZjM2YzZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKns_MTZG3I_POKgJyT0OXNhzSQt39bf1ueHppU4Gr0',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json()
    dispatch(getPosters(response))
}
const fetchDetails =(id)=>async (dispatch) => {
    let response=await(await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcyNzU1ZjYxZmE0MDVkMTc3YTY0NGE2YzhjOGNmNSIsInN1YiI6IjYwYzNkNTYzNWIzNzBkMDAzZjM2YzZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKns_MTZG3I_POKgJyT0OXNhzSQt39bf1ueHppU4Gr0',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json()
    dispatch(getDetails(response))
}

export {fetchMovies, fetchPosters, fetchDetails}