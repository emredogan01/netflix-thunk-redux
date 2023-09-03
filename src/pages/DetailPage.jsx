import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/contants";
import Loading from "../conponents/Loading";
import MovieDetail from "../conponents/MovieDetail";
import ReviewsDetail from "../conponents/ReviewsDetail";

const DetailPage = () => {

  // detail yorumlar
  const [review, setReview] = useState(null);

  const [movie, setMovie] = useState(null);

  // url'den id'yi alma
  const {movieId} = useParams();

  
  useEffect(()=>{
    axios.get(`/movie/${movieId}?language=tr-TR`, options)
    .then((res)=> setMovie(res.data))

    axios.get(`/movie/${movieId}/reviews?language=en-US`, options)
    .then((res)=> setReview(res.data))
  },[])
  

  return (
    <div className="movie-detail row p-4 d-flex align-items-start">
      {!movie ? <Loading /> : (
      <MovieDetail movie={movie}/>
      )}

      {!review ? <Loading /> : (
      <ReviewsDetail review={review}/>
      )}
    </div>
  )
}

export default DetailPage;