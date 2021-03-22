import "./Form.css";

const Form = ({ onSubmit, children, name, noValidate }) => {
  
  return (
    <form
      className={`form ${name === "profile" ? "form_type_profile" : ""}`}
      name={name}
      onSubmit={onSubmit}
      noValidate={noValidate}
    >
      {children}
    </form>
  );
};

export default Form;
