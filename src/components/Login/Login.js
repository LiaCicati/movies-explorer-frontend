import "./Login.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import { useFormWithValidation } from '../../utils/utils';

const Login = ({onLogin}) => {
  const loggedIn = false;

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = values;
    onLogin(email, password);
  };

  return (
    <section className="login">
      <Greeting text="Рады видеть!" loggedIn={loggedIn} />
      <Form name="login" onSubmit={handleSubmit} noValidate>
        <Input
          auth
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Введите почту"
          onChange={handleChange}
          value={values.email || ""}
          error={errors.email}
        />
        <Input
          auth
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
          placeholder="Введите пароль"
          onChange={handleChange}
          value={values.password || ""}
          error={errors.password}
        />

        <Auth
        isDisabledButton={!isValid}
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
