import React, { useState } from "react";
import Logo from "../../assets/Quora-logo.svg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { user } from "../../getUser";
import { questionAndAnswers, questionLists } from "../../data";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const questionHandler = () => {
    navigate("/questions");
  };

  const answerHandler = () => {
    navigate("/answers");
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Quora-Logo" className="logo" />
      </header>
      <h1 className="header1">Quora Clone</h1>
      <div className="main">
        <div className="headerContainer">
          <NavLink to="/home" className="link">
            <h2 className="header2">Quora</h2>
          </NavLink>
          <div className="searchContainer">
            <input
              type="text"
              className="searchInput"
              id="search"
              value={input}
              onChange={inputHandler}
              placeholder="   search for questions..."
            />
            <Search className="searchIcon" />
          </div>
          <div className="btn">
            <button onClick={questionHandler} className="bttn">
              Add questions
            </button>
            <button onClick={answerHandler} className="bttn">
              Add answers
            </button>
            <button onClick={logoutHandler} className="bttn">
              Logout
            </button>
          </div>
        </div>

        <div className="quesAndAnsContainer">
          <div className="queAnsContainer">
            {questionAndAnswers.map((list) => {
              return (
                <div className="list" key={list.id}>
                  <h2 className="questionName">{list.questionedBy}</h2>
                  <p className="question">{list.question}</p>
                  <p className="answer">
                    <span className="answerName">{list.answeredBy} - </span>
                    {list.answer}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="queContainer">
            <h1>Question List</h1>
            {questionLists.map((list) => {
              return (
                <div className="questionList" key={list.id}>
                  <p>{list.question}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
