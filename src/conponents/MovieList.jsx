import axios from "axios"
import { useEffect, useState } from "react"
import { baseImgUrl, options } from "../utils/contants"
import Loading from "./Loading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const MovieList = ({genre}) => {
    const [movies, setMovies] = useState(null);
    
    useEffect(()=>{
        // gelen category'e ait filmleri çeker
        axios
        .get(`/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genre.id}`, options)
        .then((res)=> setMovies(res.data.results))
    },[])


  return (
    <div className="p-4">
        {/* filmler yüklenmedi ise loading bas */}
        {!movies && <Loading />}
        
        {/* filmler yüklendiyse slider'ları bas*/}
        {movies && (
            <>
            <h1 className="mb-4">{genre.name}</h1>
            <Splide options={{
                gap: "10px",
                type: "loop",
                autoWidth: true,
                pagination: false,
            }}>
                {movies?.map((movie)=> 
                (<SplideSlide key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <img className="movie" src={baseImgUrl.concat(movie.poster_path)} />
                    </Link>
                </SplideSlide>))}
            </Splide>
            </>
        )}
    </div>
  )
}

export default MovieList;