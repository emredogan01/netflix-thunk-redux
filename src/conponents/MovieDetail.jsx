import React from 'react'
import { baseImgUrl } from '../utils/contants'
import Badges from './Badges'


const MovieDetail = ({movie}) => {
  return (
    <>
        <div style={{maxWidth: "500px"}} className="col-md-4 d-flex p-4">
          <div className="d-flex justify-content-center position-relative">
            <img className="rounded shadow w-100" src={baseImgUrl.concat(movie.poster_path)} />
            <p 
            style={{right: "5px", marginBottom: "5px"}} 
            className="position-absolute bg-warning rounded p-1 shadow bottom-0 text-black fw-bold">{movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>  
        <div className="col-md-8 gap-4 mt-4">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="row">
            <div>
              <Badges title="Kategoryler" list={movie.genres} color={"bg-primary"}/>
              <Badges title="Diller" list={movie.spoken_languages} color={"bg-danger"}/>
              <Badges title="Yapımcı Şirketler" list={movie.production_companies} color={"bg-success"}/>
            </div>
            <div>
              <p>Maliyet: {movie.budget}</p>
              <p>Hasılatlar: {movie.revenue}</p>
            </div>
          </div>
        </div>  
      </>
  )
}

export default MovieDetail