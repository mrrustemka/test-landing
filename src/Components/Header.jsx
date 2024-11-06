import React from "react";
import casino from "../Images/logo_casino.svg";
import coin from "../Images/logo-second.png";

function Header() {
  return (
    <div className="header">
      <a className="header__link" href="#">
        <div className="header__logos">
          <img
            className="header__logo header__logo--casino"
            src={casino}
            alt="Logo Casino"
          />
          <img
            className="header__logo header__logo--coin"
            src={coin}
            alt="Logo Coin"
          />
        </div>
      </a>
    </div>
  );
}

export default Header;
