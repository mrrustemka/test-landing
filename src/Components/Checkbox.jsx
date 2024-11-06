import "../App.css";

const Checkbox = ({ label, handler }) => {
  return (
    <label className="checkbox-container">
      {label}
      <input type="checkbox" checked={label} onChange={() => handler()} />
      <span className="custom-checkbox"></span>
    </label>
  );
};

export default Checkbox;
