import "./Input.css";

const Input = ({
  id,
  name,
  type,
  placeholder,
  minLength,
  maxLength,
  label,
  error,
  onChange,
  value
}) => {
  return (
    <>
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        minLength={minLength}
        maxLength={maxLength}
        autoComplete="off"
        onChange={onChange}
        value={value}
        style={error && {borderBottom: 'solid 1px #FF6838'}}
      />
       { error && <span className="input__error">{ error }</span>}
    </>
  );
};

export default Input;
