import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";

const Login = () => {
  const userRef = useRef(getItem("user"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== userRef.current?.email) {
      emailRef.current.style.outlineColor = "red";
      emailRef.current.focus();
      emailErrorRef.current.style.display = "block";
    }
    if (password !== userRef.current?.password) {
      passwordRef.current.style.outlineColor = "red";
      passwordRef.current.focus();
      passwordErrorRef.current.style.display = "block";
    }
    if (
      email === userRef.current?.email &&
      password === userRef.current?.password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userRef.current, islogged: true })
      );
      navigate("/home");
    }
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value.toLowerCase());
    emailErrorRef.current.style.display = "none";
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    passwordErrorRef.current.style.display = "none";
  };

  return (
    <div className="mainPage">
      <div className="container">
        <h1 className="title">Log In</h1>
        <form className="login_form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="   Enter Email"
            onChange={handleEmailInput}
            ref={emailRef}
            value={email}
          />

          <div id="email_error" ref={emailErrorRef}>
            The email address you entered isn't registered or incorrrect
          </div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="   Enter Password"
            onChange={handlePasswordInput}
            ref={passwordRef}
            value={password}
          />

          <div id="pass_error" ref={passwordErrorRef}>
            Enter valid password
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="sign_up">
          Register here{" "}
          <NavLink to="/signup" className="tag">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
