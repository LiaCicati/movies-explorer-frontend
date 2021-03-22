import "./Register.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import { useState } from "react";

const Register = () => {
  const loggedIn = false;

  const [values, setValues] = useState({
    name: "",
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
    <section className="register">
      <Greeting text="Добро пожаловать!" loggedIn={loggedIn} />
      <Form name="register" onSubmit={handleSubmit} noValidate>
        <Input
          auth
          label="Имя"
          id="name"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Введите имя"
          onChange={handleChangeInput}
          value={values.name}
          error={errors.name}
        />
        <Input
          auth
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Введите почту"
          value={values.email}
          error={errors.email}
          onChange={handleChangeInput}
        />

        <Input
          auth
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
          placeholder="Введите пароль"
          value={values.password}
          error={errors.password}
          onChange={handleChangeInput}
        />

        <Auth
          buttonText="Зарегистрироваться"
          paragraph="Уже зарегистрированы?"
          linkText="Войти"
          href="/signin"
        />
      </Form>
    </section>
  );
};

export default Register;
