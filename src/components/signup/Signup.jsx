import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const successRef = useRef(null);

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name.length < 3) {
      nameRef.current.style.outlineColor = "red";
      nameRef.current.focus();
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailRef.current.style.outlineColor = "red";
      emailRef.current.focus();
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 6) {
      passwordRef.current.style.outlineColor = "red";
      passwordRef.current.focus();
      passwordErrorRef.current.style.display = "block";
    }
    if (name.length >= 3 && email.match(emailPattern) && password.length >= 6) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: name,
          email: email,
          password: password,
          islogged: false,
        })
      );

      successRef.current.style.display = "block";
      setName("");
      setPassword("");
      setEmail("");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
    nameErrorRef.current.style.display = "none";
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value.toLowerCase());
    emailErrorRef.current.style.display = "none";
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
    passwordErrorRef.current.style.display = "none";
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="signup">
      <div className="container">
        <h1 className="title">Sign Up</h1>
        <form className="signup_form" onSubmit={handleSignup}>
          <div id="success" ref={successRef}>
            Account successfully Registered!
          </div>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="   Name"
            onChange={handleNameInput}
            ref={nameRef}
            value={name}
          />

          <div id="name_error" ref={nameErrorRef}>
            Enter your valid name
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="   Email"
            onChange={handleEmailInput}
            ref={emailRef}
            value={email}
          />

          <div id="email_error" ref={emailErrorRef}>
            Enter valid email address
          </div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="   Password"
            onChange={handlePasswordInput}
            ref={passwordRef}
            value={password}
          />

          <div id="pass_error" ref={passwordErrorRef}>
            Password must contain atleast 6 characters
          </div>

          <button type="submit">Create account</button>
        </form>

        <div className="log_in">
          Existing user{" "}
          <NavLink to="/" className="tag">
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
