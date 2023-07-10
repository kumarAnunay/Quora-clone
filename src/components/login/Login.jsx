import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import { TextField } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import logo from "../../assets/googleLogo.png";
import login from "../../assets/login.png";

const Login = () => {
  const userRef = useRef(getItem("user"));

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const navigate = useNavigate();

  const { email, password } = loginDetails;

  const handleLogin = (event) => {
    event.preventDefault();
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
      window.location.reload();
    }
  };

  const googleLogin = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userRef.current,
            username: userName,
            email: email,
            islogged: true,
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    if (!userRef.current?.islogged) {
      navigate("/");
    } else {
      navigate("home");
    }
  }, [userRef.current?.islogged]);

  const handleLoginDetails = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setLoginDetails({
      ...loginDetails,
      [field]: value,
    });

    emailErrorRef.current.style.display = "none";
    passwordErrorRef.current.style.display = "none";
  };

  return (
    <div className="mainPage">
      <div className="container">
        <div className="logoContainer">
          <img src={login} alt="login_logo" className="loginLogo" />
        </div>
        <form className="login_form">
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={handleLoginDetails}
            ref={emailRef}
            value={email}
            className="textField"
          />

          <div id="email_error" ref={emailErrorRef}>
            The email address you entered isn't registered or incorrrect
          </div>

          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={handleLoginDetails}
            ref={passwordRef}
            value={password}
            className="textField"
          />

          <div id="pass_error" ref={passwordErrorRef}>
            Enter valid password
          </div>
          <div className="loginContainer">
            <button type="submit" className="loginBttn" onClick={handleLogin}>
              Login
            </button>
            <button
              type="submit"
              className="loginBttn googleBttn"
              onClick={googleLogin}
            >
              <img src={logo} alt="logo" className="googleLogo" />
              Signin with Google
            </button>
          </div>
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
