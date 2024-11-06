import "../App.css";

const Checkbox = ({ checked, handler }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={() => handler()} />
      <span className="checkbox__custom"></span>
    </label>
  );
};

export default Checkbox;
