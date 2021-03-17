import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import AuthNav from "../AuthNav/AuthNav";
import MoviesNav from '../MoviesNav/MoviesNav'

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? "header_auth" : ""}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo"></img>
      </Link>
      {!loggedIn && <AuthNav />}
      {loggedIn && <MoviesNav />}
    </header>
  );
};

export default Header;
