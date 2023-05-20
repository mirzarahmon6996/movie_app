import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

const Movie = () => {

  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: [],
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovieList({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieList({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieList);
  return (
    <div>
      {movieList.isFetched ? (
        <div className="cards">
          {movieList.data.results.map((movie, index) => (
            <MovieCard
              key={index}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.title}
              relaseDate={movie.release_date}
              imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ))}
        </div>
      ) : (
<<<<<<< HEAD
        <div className="loading">
          <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle
              class="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 660"
              stroke-dashoffset="-330"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 220"
              stroke-dashoffset="-110"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
          </svg>
        </div>
=======
               <div className="loading"> <div className="loader"></div></div>
>>>>>>> parent of 6b5aae3 (added)
      )}
    </div>
  );
};

export default Movie;
