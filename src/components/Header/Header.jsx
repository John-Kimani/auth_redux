import React from "react";
import './header.css'

import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { addToCart } from "../../features/cartSlice";

const Header = () => {
  const user = useSelector(selectUser);

  const cart = useSelector(addToCart);

  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Pizza<span className="mama">MAMA</span>
        </a>

        <div className="nav__menu show-menu">
          <ul className="nav__list grid">
          <li className="nav__item">Cart
            {cart.length < 1 ? "" : <sup className="cart_length">{cart.length}</sup>}
            </li>
            {user ===null ? <li className="nav__item">Login</li> : <li className="nav__item">
              Hello, <span className="mama">{user.name}</span> </li>}
            <li className="nav__item">
             <button className='logout_button' type='submit' onClick={ (e) => handleLogOut(e)} >Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
