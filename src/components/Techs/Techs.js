import SectionHeading from "../SectionHeading/SectionHeading";
import "./Techs.css";
const Techs = () => {
  return (
    <section className="techs">
      <SectionHeading title="Технологии" />
      <div className="techs__container">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">
            <h4 className="techs__item-title">HTML</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">CSS</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">JS</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">React</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">Git</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">Express.js</h4>
          </li>
          <li className="techs__list-item">
            <h4 className="techs__item-title">mongoDB</h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
