import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registered, setRegistered] = useState(false);

  const nameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const emailErrorRef = useRef(null);

  const navigate = useNavigate();

  const { name, email, password } = signupDetails;

  const handleSignup = (event) => {
    event.preventDefault();
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name.length < 3) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 6) {
      passwordErrorRef.current.style.display = "block";
    }
    if (name.length >= 3 && email.match(emailPattern) && password.length >= 6) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: name,
          email: email,
          password: password,
        })
      );

      setSignupDetails({
        name: "",
        email: "",
        password: "",
      });
      toast.success("Account successfully Registered!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setRegistered(true);
    }
  };

  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  }, [registered]);

  const handleSignupDetails = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSignupDetails({
      ...signupDetails,
      [field]: value,
    });

    nameErrorRef.current.style.display = "none";
    emailErrorRef.current.style.display = "none";
    passwordErrorRef.current.style.display = "none";
  };

  return (
    <div className="mainPage">
      <ToastContainer />
      <div className="container">
        <div className="logoContainer">
          <img src={login} alt="login_logo" className="loginLogo" />
        </div>
        <form className="signup_form" onSubmit={handleSignup}>
          <TextField
            id="name"
            label="Name"
            type="text"
            onChange={handleSignupDetails}
            value={name}
            className="textField"
          />

          <div id="name_error" ref={nameErrorRef}>
            Enter your valid name
          </div>
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={handleSignupDetails}
            value={email}
            className="textField"
          />

          <div id="email_error" ref={emailErrorRef}>
            Enter valid email address
          </div>

          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={handleSignupDetails}
            value={password}
            className="textField"
          />

          <div id="pass_error" ref={passwordErrorRef}>
            Password must contain atleast 6 characters
          </div>

          <button type="submit" className="signupBttn">
            Create account
          </button>
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
