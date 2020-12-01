/** @format */

import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("./");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const createAccount = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creating user with emal and pass.

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </Link>
      <div className="login_container">
        <h2>Login</h2>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button type="submit" onClick={login} className="login_button">
            <small>Continue</small>
          </button>
        </form>
        <small>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. To create an account enter your email and password and click
          Create your Amazon acount
        </small>
        <button onClick={createAccount} className="signin_button">
          <small>Create your Amazon account </small>
        </button>
      </div>
    </div>
  );
}

export default Login;
