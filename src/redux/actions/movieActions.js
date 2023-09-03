import axios from "axios"
import { options } from "../../utils/contants"
import { actionsTpyes } from "./actionsType"


// ! async fonksiyon
// verileri çekrsin ve reducer'a aktarsın

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getMovies = ()=> (dispatch)=> {
    // asenkron işlemler
    axios
    .get("/movie/popular", options)
    // gelen veriyi reducer a aktarma
    .then((res)=> dispatch({
        type: actionsTpyes.SET_MOVIES,
        payload: res.data.results,
    }))
    // gelen veriyi aktar
}


// kategory verilerini çek ve stora aktar

export const getGenres = ()=> (dispatch)=> {
    axios
    .get("/genre/movie/list?language=en", options)
    .then((res)=> dispatch({
        type: actionsTpyes.SET_CATEGORIES,
        payload: res.data.genres,
    }))
}