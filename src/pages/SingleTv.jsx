import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleTv = () => {
  const { id } = useParams();

  const [TvInfo, setTvInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setTvInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setTvInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(TvInfo);
  return (
    <div>
      {TvInfo.isFetched ? (
        <div className="movie__bgimg">
          <div className="movie__img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${TvInfo.data.poster_path}`}
              alt="Img"
            />
          </div>
          <div className="movie__wrap">
            <h2 className="movie__title">{TvInfo.data.original_name}</h2>
            <div className="movie__aside">
              <p className="movie__popular"> {TvInfo.data.vote_average}</p>
              <div>
                <span className="nation">Language:</span>
                <span className="languages">
                  {TvInfo.data.original_language}
                </span>
              </div>
            </div>
            <p className="movie__release">{TvInfo.data.release_date}</p>
            <p className="movie__date">{TvInfo.data.overview}</p>
            <div className="movie__wrapper">
              <p className="movie__budjet">Budget:</p>
              <p className="movie__econom">{TvInfo.data.budget}</p>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default SingleTv;
