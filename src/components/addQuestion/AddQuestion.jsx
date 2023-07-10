import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import NavBar from "../navBar/NavBar";

const AddQuestion = ({ ques, setQues }) => {
  const [questionInput, setQuestionInput] = useState("");
  const userRef = useRef(getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRef.current?.islogged) {
      navigate("/");
    }
  }, [userRef.current?.islogged]);

  const inputHandler = (event) => {
    setQuestionInput(event.target.value);
  };

  const cancelPage = () => {
    navigate("/home");
  };

  const addToQuestionHAndler = () => {
    if (questionInput !== "" && questionInput.length > 10) {
      setQues([
        ...ques,
        {
          id: (ques.length + 1).toString(),
          questionedBy: userRef.current?.username,
          question: questionInput,
        },
      ]);
      setQuestionInput("");
      alert("Question added");
    } else {
      alert("Write your question in Input Box and a valid question");
    }
  };

  return (
    <>
      <NavBar />
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
          <button className="pageBtn" onClick={cancelPage}>
            Cancel
          </button>
          <button className="pageBtn" onClick={addToQuestionHAndler}>
            Add question
          </button>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
