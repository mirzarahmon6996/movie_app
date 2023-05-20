import axios from "axios";
import { useEffect, useState } from "react";
import TvCard from "../components/TvCard";

const Tv = () => {
  const [TvList, setTvList] = useState({
    isFetched: false,
    data: [],
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setTvList({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setTvList({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(TvList);
  return (
    <div>
      {TvList.isFetched ? (
        <div className="cards">
          {TvList.data.results.map((movie, index) => (
            <TvCard
              key={index}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.name}
              relaseDate={movie.first_air_date}
              imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ))}
        </div>
      ) : (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Tv;
