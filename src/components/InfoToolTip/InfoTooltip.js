import './InfoTooltip.css'

const InfoTooltip = ({ onClose, isOpen, image, message }) => {
  return (
    <section className={`modal-tooltip ${isOpen && "modal-tooltip_opened"}`}>
      <div className="modal-tooltip__container">
        <img className="modal-tooltip__image" src={image} alt="Статус" />
        <h2 className="modal-tooltip__message">{message}</h2>
        <button
          className="modal-tooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
};

export default InfoTooltip;
