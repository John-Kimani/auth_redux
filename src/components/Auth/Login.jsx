import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" || email !== ""){
      dispatch(
        login({
          name: name,
          email: email,
          loggedIn: true,
        })
      );
    }else{
      console.log('Please fill in the information requested!')
    }

  };
  return (
    <section className="container section">
      <div className="login__interface">
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="form__title">Login Here</h2>
          <small>Please enter information requested to continue</small>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="submit__button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
