import React, { useState } from "react";
import show from "../Images/view-white.svg";
import hide from "../Images/view-close-white.svg";

// import kaz from "../Images/kazakhstan.png";
// import rus from "../Images/russia.png";
// import tur from "../Images/turkey.png";

const Form = () => {
  const [isPhoneForm, setIsPhoneForm] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState("kaz");
  const [currency, setCurrency] = useState("kaz");
  const [rules, setRules] = useState(true);
  const [policy, setPolicy] = useState(true);

  const handlePhoneCountry = (event) => {
    setPhoneCountry(event.target.value);
  };

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const toggleForm = () => {
    setIsPhoneForm(!isPhoneForm);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = () => {
    alert("Submitted");
  };

  const handleRules = () => {
    setRules(!rules);
  };

  const handlePolicy = () => {
    setPolicy(!policy);
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
      <form className="" method="post" action="#">
        {isPhoneForm ? (
          <>
            <div className="form-phone">
              <p className="phone-form__header">
                Введите номер своего телефона
              </p>
              <select
                value={phoneCountry}
                onChange={handlePhoneCountry}
                className="phone-dropdown"
              >
                <option value="kaz">+77 Казахстан</option>
                <option value="rus">+77 Россия</option>
                <option value="tur">+95 Турция</option>
              </select>
              <input
                className="select-phone__placeholder-input"
                required
                type="tel"
                id="phone-id"
                name="phone"
                placeholder="+77"
                minLength="3"
                maxLength="12"
                autocomplete="off"
              />
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
        <button className="submit-btn" type="button" onClick={handleSubmit}>
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
            <input
              className="checkbox__input"
              type="checkbox"
              id="check-rules-p"
              onChange={() => handleRules()}
              checked={rules}
              required
            />
            <div className="checkbox__text">
              {"Я согласен "}
              <a className="forms__signin-link" href="#">
                с правилами и условиями
              </a>
            </div>
          </div>
          <div className="checkbox__item checkbox__item_sub">
            <input
              className="checkbox__input"
              type="checkbox"
              checked={policy}
              onChange={() => handlePolicy()}
            />
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
