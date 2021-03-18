import "./Auth.css";
import { Link } from "react-router-dom";

const Auth = ({ buttonText, linkText, paragraph, href }) => {
  return (
    <div className="auth">
      <button className="auth__submit-button" type="submit">
        {buttonText}
      </button>
      <div className="auth__redirect">
        <p className="auth__paragraph">{paragraph}</p>
        <Link to={href} className="auth__link">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
