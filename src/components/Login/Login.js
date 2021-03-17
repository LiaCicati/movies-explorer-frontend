import "./Login.css";
import Greeting from "../Greeting/Greeting";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Login = () => {

  const loggedIn = false;
  
  return (
    <section className="login">
      <Greeting text="Рады видеть!" loggedIn={loggedIn} />
      <Form name="login">
        <Input
          label="E-mail"
          id="email"
          name="email"
          type="email"
        />
        <Input
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
        />
      </Form>
      <div className="login__container">
        <button className="login__submit-button" type="submit" disabled>
          Войти
        </button>
        <div className="login__redirect">
          <p className="login__paragraph">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
