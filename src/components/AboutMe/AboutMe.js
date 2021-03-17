import "./AboutMe.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import student from "../../images/student.jpg";

const AboutMe = () => {
  return (
    <section className="student">
      <SectionHeading title="Студент" />
      <div className="student__container">
        <div className="student__info">
          <h3 className="student__name">Лиа</h3>
          <p className="student__job">
            Начинающий веб разработчик, 20 лет
          </p>
          <p className="student__description">
            Студент «Software Technology Engineering» в Дании. Увлекаюсь
            фотографией, чтением и музыкой. На данный момент работаю фронтенд
            разработчиком благодаря навыкам полученных в Яндекс Практикуме.
          </p>
          <ul className="student__contacts">
            <li className="student__contact-item">
              <a
                href="https://www.facebook.com/leahcti/"
                target="_blank"
                className="student__contact-link"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="student__contact-item">
              <a
                href="https://github.com/LiaCicati"
                target="_blank"
                className="student__contact-link"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="student__contact-item">
              <a
                href="https://www.linkedin.com/in/lia-cicati-4340951b8/"
                target="_blank"
                rel="noreferrer"
                className="student__contact-link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <img src={student} alt="Student" className="student__image" />
      </div>
    </section>
  );
};

export default AboutMe;
