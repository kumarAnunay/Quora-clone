import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import { TextField } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import logo from "../../assets/googleLogo.png";
import quora from "../../assets/Quora-Logo.png";
import emailLogo from "../../assets/Email-logo.png";

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

  const signupPage = () => {
    navigate("/signup");
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
      <div className="loginPage">
        <div className="loginPageHeader">
          <img src={quora} alt="Quora" className="quora" />
        </div>
        <h4 className="text">
          A place to share knowledge and better understand the world
        </h4>
        <div className="loginContent">
          <div className="leftSide">
            <div className="termsAndConditions">
              By continuing you indicate that you agree to Quora's{" "}
              <span className="condition">Terms of Service</span> and{" "}
              <span className="condition">Privacy Policy</span>.
            </div>

            <div className="leftSideBtn">
              <button
                type="submit"
                className="loginBttn googleBttn"
                onClick={googleLogin}
              >
                <img src={logo} alt="logo" className="googleLogo" />
                Continue with Google
              </button>
              <button type="submit" className="signupBtn" onClick={signupPage}>
                <img src={emailLogo} alt="logo" className="emailLogo" />
                Sign up with Email
              </button>
            </div>
          </div>
          <div className="rightSide">
            <div className="logoContainer">
              <p className="rightSideLogin">Login</p>
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
                <p className="forgotPassword">Forgot Password?</p>
                <button
                  type="submit"
                  className="loginBttn"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="language">
          <span className="languageColor">हिन्दी &gt;</span>{" "}
          <span className="languageColor">मराठी &gt;</span>
        </div>
        <div className="loginFooter">
          <span className="footerLogin">About</span>
          <span>&#8901;</span>
          <span className="footerLogin">Careers</span>
          <span>&#8901;</span>
          <span className="footerLogin">Privacy</span>
          <span>&#8901;</span>
          <span className="footerLogin">Terms</span>
          <span>&#8901;</span>
          <span className="footerLogin">Contact</span>
          <span>&#8901;</span>
          <span className="footerLogin">Languages</span>
          <span>&#8901;</span>
          <span className="footerLogin">Your Ad Choices</span>
          <span>&#8901;</span>
          <span className="footerLogin">&copy; Quora-Clone</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
