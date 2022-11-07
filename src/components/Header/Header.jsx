import React from "react";
import './header.css'

const Header = () => {

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          PizzaMAMA
        </a>

        <div className="nav__menu show-menu">
          <ul className="nav__list grid">
            <li className="nav__item">Login</li>
            <li className="nav__item">Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
