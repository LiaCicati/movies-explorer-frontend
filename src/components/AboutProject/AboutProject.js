import "./AboutProject.css";
import SectionHeading from "../SectionHeading/SectionHeading";
const AboutProject = () => {
  return (
    <section className="about">
      <SectionHeading title="О проекте" />
      <div className="about__container">
        <div className="about__info">
          <h3 className="about__info-heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__info-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="about__info">
          <h3 className="about__info-heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__info-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about__container">
        <div className="about__duration">
          <h4 className="about__duration-heading">1 неделя</h4>
          <p className="about__duration-text">Back-end</p>
        </div>

        <div className="about__duration">
          <h4 className="about__duration-heading about__duration-heading_type_light">
            4 недели
          </h4>
          <p className="about__duration-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
