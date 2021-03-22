import "./Switch.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch__checkbox"
        id="switch-new"
        type="checkbox"
      />
      <label
        className={`switch__label ${isOn ? "switch__label_on" : ""}`}
        htmlFor="switch-new"
      >
        <span className="switch__button" />
      </label>
    </>
  );
};

export default Switch;
