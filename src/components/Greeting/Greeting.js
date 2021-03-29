import "./Greeting.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Greeting = ({ text, loggedIn }) => {
  return (
    <div className="greeting">
      {!loggedIn && (
        <Link to="/" className="greeting__link">
          <img src={logo} alt="Logo" className="greeting__logo"></img>
        </Link>
      )}
      <h1 className="greeting__text">{"Привет, " + text}</h1>
    </div>
  );
};

export default Greeting;
