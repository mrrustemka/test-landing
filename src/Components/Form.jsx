import React, { useState } from "react";
import show from "../Images/view-white.svg";
import hide from "../Images/view-close-white.svg";
import Checkbox from "./Checkbox";
import PhoneDropdown from "./Dropdown";
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
  // const [phoneCountry, setPhoneCountry] = useState(phones[0]);
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
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div className="form">
      {/* <img
        className="modal__gift modal__gift--top"
        src="img/bonus/gift.png"
        alt="Gift"
      /> */}
      <div className="form-title">
        <div className="form-title__title">НА ПЕРВЫЙ ДЕПОЗИТ</div>
        <div className="form-title__bonus">2 000 000₸ + 250 FS!</div>
      </div>
      <ul className="tabs">
        <li className="tabs__item">
          <button
            className={`tabs__button ${isPhoneForm ? "active" : ""}`}
            onClick={toggleForm}
            id="reg-btn-tel"
          >
            <span className="title">По телефону</span>
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${!isPhoneForm ? "active" : ""}`}
            onClick={toggleForm}
            id="reg-btn-email"
          >
            <span className="title">По e-mail</span>
          </button>
        </li>
      </ul>
      <form className="" action="#">
        {isPhoneForm ? (
          <>
            <div className="form-phone">
              <p className="phone-form__header">
                Введите номер своего телефона
              </p>
              <PhoneDropdown options={phones} />
            </div>
          </>
        ) : (
          <div id="form" method="post" action="#">
            <div className="email-form">
              <input
                className="email-form__email-input"
                type="text"
                required
                placeholder="E-mail"
                id="email-input"
                name="email"
              />
            </div>
            <div className="password-form">
              <input
                className="email-form__password-input"
                type={isPasswordVisible ? "text" : "password"}
                required
                placeholder="Пароль"
                id="password-input"
                name="password"
              />
              <div
                className="email-form__view-icon"
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
        <div className="form-currency">
          <select
            value={currency}
            onChange={handleCurrency}
            className="currency-dropdown"
          >
            <option value="kaz">₸ | KZT | Казахстан</option>
            <option value="rus">₽ | RUB | Россия</option>
            <option value="tur">₺ | TRY | Турция</option>
          </select>
        </div>
        <button
          className="submit-btn"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Зарегистрироваться
        </button>
        <div className="forms__questions">
          {"Уже есть аккаунт? "}
          <a className="forms__signin-link" href="#">
            Войти
          </a>
        </div>
        <div className="checkbox">
          <div className="checkbox__item checkbox__item_rules">
            <Checkbox label={rules} handler={setRules} />
            <div className="checkbox__text">
              {"Я согласен "}
              <a className="forms__signin-link" href="#">
                с правилами и условиями
              </a>
            </div>
          </div>
          <div className="checkbox__item checkbox__item_sub">
            <Checkbox label={policy} handler={setPolicy} />
            <div className="checkbox__text">
              Получать рассылку об акциях по e-mail и sms
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
