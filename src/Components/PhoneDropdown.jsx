import React, { useState } from "react";
import "../App.css";

const PhoneDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].logo);
  const [phoneCode, setPhoneCode] = useState(options[0].code);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option.logo);
    setPhoneCode(option.code);
    setIsOpen(false);
  };

  const handleChange = (value) => {
    setPhoneCode(value);
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown-button ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <img className="dropdown-button-flag" src={selected} alt="flag" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              <img src={option.logo} alt={option.name} />
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
      <input
        className="dropdown-phone"
        value={phoneCode}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default PhoneDropdown;
