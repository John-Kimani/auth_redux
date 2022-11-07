import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          PizzaMAMA
        </a>

        <div className="nav__menu show-menu">
          <ul className="nav__list grid">
            <li className="nav__item"><Link to='/login'>Login</Link></li>
            <li className="nav__item">Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
