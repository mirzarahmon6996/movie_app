import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "../../assets/img/header__logo.png";

import "./Header.scss";

const Header = () => {
  const [color, setColor] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (searchValue.length > 0) {
      navigate(`/search/${searchValue}`);
    } else {
      navigate(`/`);
    }
  }, [searchValue, navigate]);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="site-holder" onClick={() => setColor ("home")}>
              <img
                className="header__logo"
                src={HeaderLogo}
                alt="HeaderLogo"
                width="70"
                height="70"
              />
            </Link>
          </div>
          <nav className="header__center">
            <ul>
              <li>
                <Link
                  className={`header__link ${
                    color === "home" ? "active" : " "
                  }`}
                  onClick={() => setColor("home")}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  className={`header__link ${
                    color === "movie" ? "active" : " "
                  }`}
                  onClick={() => setColor("movie")}
                  to="/movie"
                >
                  Movie
                </Link>
              </li>
              <li>
              <Link
                  className={`header__link ${
                    color === "tv" ? "active" : " "
                  }`}
                  onClick={() => setColor("tv")}
                  to="/tv"
                >
                  Tv
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearchChange}
                value={searchValue}
                placeholder="Input here..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
