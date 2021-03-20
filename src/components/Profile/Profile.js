import "./Profile.css";
import Greeting from "../Greeting/Greeting";
import Form from '../Form/Form'
import Input from "../Input/Input";
import { useState } from 'react'

const Profile = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
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

  return (
    <section className="profile">
      <Greeting text="Привет, Лиа!" loggedIn={true} />
      <Form name="profile">
        <Input
          editProfile
          label="Имя"
          id="name"
          name="name"
          type="text"
          placeholder="Ваше имя"
          required
          minLength="2"
          maxLength="30"
          autoComplete="off"
          onChange={handleChangeInput}
          value={values.name}
          error={errors.name}
        />

        <Input
          editProfile
          label="Почта"
          id="email"
          name="email"
          type="email"
          placeholder="Ваша почта"
          required
          autoComplete="off"
          onChange={handleChangeInput}
          value={values.email}
          error={errors.email}
        />
      </Form>

      <div className="profile__container">
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_type_logout">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
