import "./FilterCheckBox.css";
import Switch from "../Switch/Switch";
import { useState } from "react";

const FilterCheckBox = () => {
    
  const [value, setValue] = useState(false);

  return (
    <div className="filter">
      <Switch isOn={value} handleToggle={() => setValue(!value)} />
      <span className="filter__title">Короткометражки</span>
    </div>
  );
};

export default FilterCheckBox;
