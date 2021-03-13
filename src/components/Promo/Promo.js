import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";
const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__wrapper">
        <img src={promoLogo} className="promo__logo" alt="Landing logo" />
      </div>
    </section>
  );
};

export default Promo;
