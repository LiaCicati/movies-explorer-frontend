import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import AuthNav from "../AuthNav/AuthNav";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo"></img>
      </Link>
      {!loggedIn && <AuthNav />}
    </header>
  );
};

export default Header;
