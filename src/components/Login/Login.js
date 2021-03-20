import "./Login.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";

const Login = () => {
  const loggedIn = false;

  return (
    <section className="login">
      <Greeting text="Рады видеть!" loggedIn={loggedIn} />
      <Form name="login">
        <Input
          auth
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Введите почту"
        />
        <Input
          auth
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
          placeholder="Введите пароль"
        />

        <Auth
          buttonText="Войти"
          paragraph="Ещё не зарегистрированы?"
          linkText="Регистрация"
          href="/signup"
        />
      </Form>
    </section>
  );
};

export default Login;
