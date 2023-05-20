import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleMovie = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovieInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieInfo);
  return (
    <div>
      {movieInfo.isFetched ? (
        <div className="movie__bgimg">
          <div className="movie__img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.poster_path}`}
              alt="Img"
            />
          </div>
          <div className="movie__wrap">
            <h2 className="movie__title">{movieInfo.data.title}</h2>
            <div className="movie__aside">
              <p className="movie__popular"> {movieInfo.data.vote_average}</p>
              <div>
                <span className="nation">Language:</span>
                <span className="languages">
                  {movieInfo.data.original_language}
                </span>
              </div>
            </div>
            <p className="movie__release">{movieInfo.data.release_date}</p>
            <p className="movie__date">{movieInfo.data.overview}</p>
            <div className="movie__wrapper">
              <p className="movie__budjet">Budget:</p>
              <p className="movie__econom">{movieInfo.data.budget}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
