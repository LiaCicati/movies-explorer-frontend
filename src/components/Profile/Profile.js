import "./Profile.css";
import Greeting from "../Greeting/Greeting";

const Profile = () => {
  return (
    <section className="profile">
      <Greeting text="Привет, Лиа!" loggedIn={true} />
      <form className="profile__form" name="profile">
        <div className="profile__input-container">
          <label
            className="profile__label"
            htmlFor="name"
          >
            Имя
          </label>
          <input
            className="profile__input"
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
        </div>

        <div className="profile__input-container">
          <label
            className="profile__label"
            htmlFor="email"
          >
            Почта
          </label>
          <input
            className="profile__input"
            id="email"
            name="email"
            type="email"
            placeholder="Ваша почта"
            required
            autoComplete="off"
          />
        </div>
      </form>

      <div className="profile__container">
          <button className="profile__button">Редактировать</button>
          <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
      </div>
    </section>
  );
};

export default Profile;
