import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddQuestion = ({ ques, setQues }) => {
  const [questionInput, setQuestionInput] = useState("");
  const userRef = useRef(getItem("user"));
  const navigate = useNavigate();
  const [questionAdded, setQuestionAdded] = useState(false);

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
          id: ques.length + 1,
          questionedBy: userRef.current?.username,
          question: questionInput,
        },
      ]);
      setQuestionInput("");
      toast.success("Question added", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setQuestionAdded(true);
    } else {
      toast.error("Write your question in Input Box and a valid question", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (questionAdded) {
      setTimeout(() => {
        navigate("/questions");
      }, 3500);
    }
  }, [questionAdded]);

  return (
    <>
      <NavBar />
      <div className="questionContainer">
        <ToastContainer />
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
      <Footer />
    </>
  );
};

export default AddQuestion;
