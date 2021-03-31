import "./Profile.css";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/formValidation";

const Profile = ({ onSignOut, onUpdate }) => {
  const [isVisibleSubmitButton, setVisibleSubmitButton] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
    setVisibleSubmitButton(false);
  }

  function handleClickEditButton() {
    setVisibleSubmitButton(true);
  }

  return (
    <>
      <Header />
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
            {!isVisibleSubmitButton && (
              <>
                <button
                  type="button"
                  className={`profile__button`}
                  onClick={handleClickEditButton}
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
              </>
            )}

            {isVisibleSubmitButton && (
              <button
                className={`profile__submit-button ${
                  !isValid ? "profile__submit-button_disabled" : ""
                }`}
                type="submit"
                disabled={!isValid}
              >
                Сохранить
              </button>
            )}
          </div>
        </Form>
      </section>
    </>
  );
};

export default Profile;
