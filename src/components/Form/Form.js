import "./Form.css";

const Form = ({ onSubmit, children }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
