
import { useSelector } from "react-redux"
import { movieReducer } from "../redux/reducers/movieReducer"
import Loading from "./Loading"
import { baseImgUrl } from "../utils/contants"

const Hero = () => {
    // store'daki movieReducer'a abone olma
    const state = useSelector((store)=> store.movieReducer)
    console.log(state)
    
    // dizi uzunluğuna göre rastgele sayi bulma
    const i =Math.floor(Math.random()* state.popularMovies.length);
    // rastgele bir filme erişme
    const movie = state.popularMovies[i];
    
  return (
    <div className="row p-4">
        {/* apiden cevap gelmediyse */}

        {state.isLoading && <Loading />}

        {/* veri geldiyse ara yüzü bas */}

        {!state.isLoading && (
        <>
        <div className="col-md-6 flex-column align-items-center align-items-md-start justify-content-center mb-3 gap-3">
            <h1>{movie.title}</h1>
            <p className="lead">{movie.overview}</p>
            <p className="text-warning fw-bold text-center text-md-start">ımdb: {movie.vote_average}</p>
            <div className="d-flex gap-3 text-light">
                <button className="btn btn-success">Filmi izle</button>
                <button className="btn btn-info">Film Detay</button>
            </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img className="img-fluid rounded shadow" src={baseImgUrl.concat(movie.backdrop_path)} alt="" />
        </div>
        </>)}
    </div>
  )
}

export default Hero;