import React from "react";
import './header.css'

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { addToCart } from "../../features/cartSlice";

const Header = () => {
  const user = useSelector(selectUser);

  const cart = useSelector(addToCart);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Pizza<span className="mama">MAMA</span>
        </a>

        <div className="nav__menu show-menu">
          <ul className="nav__list grid">
            {user ===null ? <li className="nav__item">Login</li> : <li className="nav__item">
              Hello, <span className="mama">{user.name}</span> </li>}
            <li className="nav__item">Cart
            {cart.length < 1 ? "" : <sup className="cart_length">{cart.length}</sup>}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
