import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getGenres } from '../redux/actions/movieActions';
import Hero from '../conponents/Hero';
import MovieList from '../conponents/MovieList';

const MainPage = () => {

  const state = useSelector((store)=> store.movieReducer)
  console.log(state)

    const dispatch = useDispatch();

    useEffect(()=>{
      // populer filmleri alma
      dispatch(getMovies());

      // kategoriylere erişme
      dispatch(getGenres())
      
    },[])

  return (
    <div>
        <Hero />
        {/* her bir kategory için kategory'e ait filmleri ekrana basıcak fonksiyon */}
        {state.genres.map((genre)=>(
          <MovieList key={genre.id} genre={genre}/>
        ))}
    </div>
  )
}

export default MainPage