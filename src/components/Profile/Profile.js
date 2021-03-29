import "./Profile.css";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/formValidation";

const Profile = ({ onSignOut, onUpdate }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  }

  return (
    <>
      <Header loggedIn={true} />
      <section className="profile">
        <Greeting text={currentUser.name} loggedIn={true} />
        <Form name="profile" noValidate onSubmit={handleSubmit}>
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
            onChange={handleChange}
            defaultValue={currentUser.name}
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
            onChange={handleChange}
            defaultValue={currentUser.email}
            error={errors.email}
          />

          <div className="profile__container">
            <button
              type="submit"
              disabled={!isValid}
              className={`profile__button ${
                !isValid ? "profile__button_disabled" : ""
              }`}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_logout"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default Profile;
