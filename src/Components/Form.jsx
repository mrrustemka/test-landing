import React, { useState } from "react";
import show from "../Images/view-white.svg";
import hide from "../Images/view-close-white.svg";
import Checkbox from "./Checkbox";
import PhoneDropdown from "./PhoneDropdown";
import kaz from "../Images/kazakhstan.png";
import rus from "../Images/russia.png";
import tur from "../Images/turkey.png";

const Form = () => {
  const phones = [
    { id: 1, name: "kaz", label: "+7 Казахстан", code: "+7", logo: kaz },
    { id: 2, name: "rus", label: "+7 Россия", code: "+7", logo: rus },
    { id: 3, name: "tur", label: "+90 Турция", code: "+90", logo: tur }
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
      {/* <img
        className="modal__gift modal__gift--top"
        src="img/bonus/gift.png"
        alt="Gift"
      /> */}
      <div className="form__title">
        <div className="form__title__text">НА ПЕРВЫЙ ДЕПОЗИТ</div>
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
            <span className="form__tabs__button__title">По телефону</span>
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
            <span className="form__tabs__button__title">По e-mail</span>
          </button>
        </li>
      </ul>
      <form className="" action="#">
        {isPhoneForm ? (
          <>
            <div className="form__phone">
              <p className="form__phone__header">
                Введите номер своего телефона
              </p>
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
                placeholder="Пароль"
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
        <div className="form__currency">
          <select
            value={currency}
            onChange={handleCurrency}
            className="form__currency-dropdown"
          >
            <option value="kaz">₸ | KZT | Казахстан</option>
            <option value="rus">₽ | RUB | Россия</option>
            <option value="tur">₺ | TRY | Турция</option>
          </select>
        </div>
        <button
          className="form__submit-btn"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Зарегистрироваться
        </button>
        <div className="form__questions">
          {"Уже есть аккаунт? "}
          <a className="form__questions__link" href="#">
            Войти
          </a>
        </div>
        <div className="form__checkbox">
          <div className="form__checkbox__item form__checkbox__item--rules">
            <Checkbox checked={rules} handler={handleRulesChange} />
            <div className="form__checkbox__text">
              {"Я согласен "}
              <a className="form__questions__link" href="#">
                с правилами и условиями
              </a>
            </div>
          </div>
          <div className="form__checkbox__item form__checkbox__item--sub">
            <Checkbox checked={policy} handler={handlePolicyChange} />
            <div className="form__checkbox__text">
              Получать рассылку об акциях по e-mail и sms
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
