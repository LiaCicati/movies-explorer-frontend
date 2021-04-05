import "./FilterCheckBox.css";
import Switch from "../Switch/Switch";

const FilterCheckBox = ({ isOn, handleToggle }) => {
  return (
    <div className="filter">
      <Switch isOn={isOn} handleToggle={handleToggle} />
      <span className="filter__title">Короткометражки</span>
    </div>
  );
};

export default FilterCheckBox;
