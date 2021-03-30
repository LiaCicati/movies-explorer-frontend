import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";
import logo from "../../images/logo.svg";
import AuthNav from "../AuthNav/AuthNav";
import MoviesNav from "../MoviesNav/MoviesNav";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header
      className={`header ${!currentUser.email ? "header_type_auth" : ""}`}
    >
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo"></img>
      </Link>
      {!currentUser.email && <AuthNav />}
      {currentUser.email && <MoviesNav />}
    </header>
  );
};

export default Header;
