import "./Profile.css";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/formValidation";

const Profile = ({ onSignOut, onUpdate }) => {
  const [isVisibleSubmitButton, setVisibleSubmitButton] = useState(false);
  const [isDisabledInput, setDisabledInput] = useState(true);

  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
    setVisibleSubmitButton(false);
    setDisabledInput(true);
  }

  function handleClickEditButton() {
    setDisabledInput(false);
    setVisibleSubmitButton(true);
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

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
            value={values.name || ""}
            error={errors.name}
            disabled={isDisabledInput}
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
            value={values.email || ""}
            error={errors.email}
            disabled={isDisabledInput}
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
