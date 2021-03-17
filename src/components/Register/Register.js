import "./Register.css";
import Greeting from "../Greeting/Greeting";
import { Link } from "react-router-dom";
import Form from '../Form/Form';
import Input from "../Input/Input";

const Register = () => {

  const loggedIn = false;
  
  return (
    <section className="register">
      <Greeting text="Добро пожаловать!" loggedIn={loggedIn} />
      <Form>
        <Input
          label="Имя"
          id="name"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          error="Что-то пошло не так..."
        />
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
      <div className="register__container">
        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__redirect">
          <p className="register__paragraph">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
