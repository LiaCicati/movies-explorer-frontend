import "./Register.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";

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
          placeholder="Введите имя"
        />
        <Input
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="Введите почту"
        />

        <Input
          label="Пароль"
          id="password"
          name="password"
          type="password"
          minLength="6"
          placeholder="Введите пароль"
        />
      </Form>

      <Auth
        buttonText="Зарегистрироваться"
        paragraph="Уже зарегистрированы?"
        linkText="Войти"
        href="/signin"
      />
    </section>
  );
};

export default Register;
