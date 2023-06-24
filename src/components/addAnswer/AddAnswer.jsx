import React, { useState } from "react";
import "./AddAnswer.css";
import { questionLists } from "../../data";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Quora-logo.svg";

const AddAnswer = () => {
  const [answerInput, setAnswerInput] = useState("");
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setAnswerInput(event.target.value);
  };

  const cancelPage = () => {
    navigate(-1);
  };

  const addAnswerInputHandler = () => {};

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Quora-Logo" className="logo" />
      </header>
      <h1 className="header1">Quora Clone</h1>
      <div className="ansContainer">
        <div className="answerContainer">
          <div className="answerquestionContainer">
            <h2 className="ansHeader">Questions</h2>
            <div>
              {questionLists.map((question) => {
                return <h3 className="questionAns">{question.question}</h3>;
              })}
            </div>
          </div>
          <textarea
            type="text"
            id="answerInput"
            value={answerInput}
            placeholder="   Type your Answer here ..."
            onChange={inputHandler}
            className="answerInput"
          ></textarea>
        </div>

        <div className="answerBtnContainer">
          <button className="answerBtn" onClick={cancelPage}>
            Cancel
          </button>
          <button className="answerBtn" onClick={addAnswerInputHandler}>
            Add Answer
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAnswer;
