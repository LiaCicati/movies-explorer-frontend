import "./Login.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import { useState } from 'react'

const Login = () => {
  const loggedIn = false;

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChangeInput = (evt) => {
    const { name, validationMessage, value } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validationMessage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={handleChangeInput}
          value={values.email}
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
          onChange={handleChangeInput}
          value={values.password}
          error={errors.password}
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
