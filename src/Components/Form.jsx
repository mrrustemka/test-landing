import React, { useState } from "react";
import show from "../Images/view-white.svg";
import hide from "../Images/view-close-white.svg";
import Checkbox from "./Checkbox";
import PhoneDropdown from "./PhoneDropdown";
import CurrencyDropdown from "./CurrencyDropdown";
import kaz from "../Images/kazakhstan.png";
import rus from "../Images/russia.png";
import tur from "../Images/turkey.png";

const Form = () => {
  const phones = [
    { id: 1, name: "kaz", label: "+7 Kazakhstan", code: "+7", logo: kaz },
    { id: 2, name: "rus", label: "+7 Russia", code: "+7", logo: rus },
    { id: 3, name: "tur", label: "+90 Turkey", code: "+90", logo: tur }
  ];
  const [isPhoneForm, setIsPhoneForm] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currency, setCurrency] = useState("kaz");
  const [rules, setRules] = useState(false);
  const [policy, setPolicy] = useState(true);
  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const toggleForm = () => {
    setIsPhoneForm(!isPhoneForm);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    alert("Submitted");
  };

  const handleRulesChange = () => {
    setRules(!rules);
  };

  const handlePolicyChange = () => {
    setPolicy(!policy);
  };

  return (
    <div className="form">
      <div className="form__title">
        <div className="form__title__text">ON THE FIRST DEPOSIT</div>
        <div className="form__bonus">2 000 000₸ + 250 FS!</div>
      </div>
      <ul className="form__tabs">
        <li className="form__tabs__item">
          <button
            className={`form__tabs__button ${
              isPhoneForm ? "form__tabs__button--active" : ""
            }`}
            onClick={toggleForm}
            id="reg-btn-tel"
          >
            <span className="form__tabs__button__title">By Phone</span>
          </button>
        </li>
        <li className="form__tabs__item">
          <button
            className={`form__tabs__button ${
              !isPhoneForm ? "form__tabs__button--active" : ""
            }`}
            onClick={toggleForm}
            id="reg-btn-email"
          >
            <span className="form__tabs__button__title">By e-mail</span>
          </button>
        </li>
      </ul>
      <form className="" action="#">
        {isPhoneForm ? (
          <>
            <div className="form__phone">
              <p className="form__phone__header">Enter your phone number</p>
              <PhoneDropdown options={phones} />
            </div>
          </>
        ) : (
          <div id="form" method="post" action="#">
            <div className="form__email">
              <input
                className="form__email__input"
                type="text"
                required
                placeholder="E-mail"
                id="email-input"
                name="email"
              />
            </div>
            <div className="password-form">
              <input
                className="form__password__input"
                type={isPasswordVisible ? "text" : "password"}
                required
                placeholder="Password"
                id="password-input"
                name="password"
              />
              <div
                className="form__password__view-icon"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <img src={hide} alt="Hide icon" />
                ) : (
                  <img src={show} alt="Show icon" />
                )}
              </div>
            </div>
          </div>
        )}
        <CurrencyDropdown />
        <button
          className="form__submit-btn"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>
        <div className="form__questions">
          {"Already have an account? "}
          <a className="form__questions__link" href="#">
            Sign in
          </a>
        </div>
        <div className="form__checkbox">
          <div className="form__checkbox__item form__checkbox__item--rules">
            <Checkbox checked={rules} handler={handleRulesChange} />
            <div className="form__checkbox__text">
              {"I agree to "}
              <a className="form__questions__link" href="#">
                the terms and conditions
              </a>
            </div>
          </div>
          <div className="form__checkbox__item form__checkbox__item--sub">
            <Checkbox checked={policy} handler={handlePolicyChange} />
            <div className="form__checkbox__text">
              Receive newsletters about promotions by e-mail and sms
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
