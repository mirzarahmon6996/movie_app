import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import errImg from "../../src/assets/img/error__img.webp";
import MovieCard from "../components/MovieCard/MovieCard";

const SearchList = () => {
  const { searchQuery } = useParams();

  const [SearchInfo, setSearchInfo] = useState({
    isFetched: false,
    data: [],
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setSearchInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setSearchInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, [searchQuery]);
  return (
    <div>
      {SearchInfo.isFetched ? (
        <div className="cards">
          {SearchInfo.data.results.length > 0 ? (
            SearchInfo.data.results.map((movie, index) => (
              <MovieCard
                key={index}
                id={movie.id}
                rating={movie.vote_average}
                title={movie.title}
                relaseDate={movie.release_date}
                imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ))
          ) : (
            <div className="no__film">
              <div>
                <img src={errImg} alt="Img" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default SearchList;
