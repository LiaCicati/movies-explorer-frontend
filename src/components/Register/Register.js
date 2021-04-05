import "./Register.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";
import { useFormWithValidation } from '../../utils/formValidation';

const Register = ({ onRegister }) => {
  const loggedIn = false;
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
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
          onChange={handleChange}
          value={values.name || ""}
          error={errors.name}
        />
        <Input
          auth
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Введите почту"
          value={values.email || ""}
          error={errors.email}
          onChange={handleChange}
        />

        <Input
          auth
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
          placeholder="Введите пароль"
          value={values.password || ""}
          error={errors.password}
          onChange={handleChange}
        />
        <Auth
          isDisabledButton={!isValid}
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
