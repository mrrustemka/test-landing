import React, { useState } from "react";
import "../App.css";

const CurrencyDropdown = () => {
  const currencies = [
    {
      value: "KZT",
      icon: "₸",
      name: "KZT",
      fullName: "Казахстанский тенге"
    },
    {
      value: "RUB",
      icon: "₽",
      name: "RUB",
      fullName: "Российский рубль"
    },
    {
      value: "TRY",
      icon: "₺",
      name: "TRY",
      fullName: "Турецкая лира"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="select-currency">
      <button
        className="select-currency__main js--currency"
        type="button"
        onClick={toggleDropdown}
      >
        <div className="select-currency__placeholder">
          <div className="select-currency__icon">
            {selectedCurrency.icon + " |"}
          </div>
          <div className="select-currency__name">
            {" " + selectedCurrency.name + " |"}
          </div>
          <div className="select-currency__text">
            {selectedCurrency.fullName}
          </div>
        </div>
      </button>

      {isOpen && (
        <ul className="select-currency__list">
          {currencies.map((currency) => (
            <li
              key={currency.value}
              className="select-currency__item"
              data-value={currency.value}
              data-icon={currency.icon}
              data-abbreviation={currency.name}
              data-title={currency.fullName}
              onClick={() => handleSelectCurrency(currency)}
            >
              <div className="select-currency__icon">{currency.icon + "|"}</div>
              <div className="select-currency__name">
                {" " + currency.name + "|"}
              </div>
              <div className="select-currency__text">{currency.fullName}</div>
            </li>
          ))}
        </ul>
      )}

      <input
        className="select-currency__default-input"
        tabIndex="-1"
        name="currency"
        value={selectedCurrency.value}
        readOnly
      />
      <input type="hidden" id="backurl" name="backurl" value="" />
      <input type="hidden" id="lang" name="lang" value="ru" />
      <input type="hidden" id="st" name="st" value="ryWK670l" />
      <input type="hidden" id="pc" name="pc" value="30" />
      <input
        type="hidden"
        id="form_email"
        name="form_email"
        value="{form_email}"
      />
      <input
        type="hidden"
        id="form_phone"
        name="form_phone"
        value="{form_phone}"
      />
    </div>
  );
};

export default CurrencyDropdown;
