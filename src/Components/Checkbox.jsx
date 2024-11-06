import "../App.css";

const Checkbox = ({ label, handler }) => {
  return (
    <label className="checkbox">
      {label}
      <input type="checkbox" checked={label} onChange={() => handler()} />
      <span className="checkbox__custom"></span>
    </label>
  );
};

export default Checkbox;
