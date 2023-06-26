import React, { useState } from "react";
import Logo from "../../assets/Quora-logo.svg";
import { useNavigate } from "react-router-dom";
import { questionLists } from "../../data";

const AddQuestion = () => {
  const [questionInput, setQuestionInput] = useState("");
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setQuestionInput(event.target.value);
  };

  const cancelPage = () => {
    navigate(-1);
  };

  const addToQuestionHAndler = () => {
    setQuestionInput("");
  };

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Quora-Logo" className="logo" />
      </header>
      <h1 className="header1">Quora Clone</h1>
      <div className="questionContainer">
        <input
          type="text"
          id="questionInput"
          value={questionInput}
          placeholder="   Type your Question here ..."
          onChange={inputHandler}
          className="questionInput"
        />
        <div className="questionBtnContainer">
          <button className="questionBtn" onClick={cancelPage}>
            Cancel
          </button>
          <button className="questionBtn" onClick={addToQuestionHAndler}>
            Add question
          </button>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
