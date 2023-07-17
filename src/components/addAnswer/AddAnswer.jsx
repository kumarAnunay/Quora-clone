import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const AddAnswer = ({ ques, queAns, setQueAns }) => {
  const [answerInput, setAnswerInput] = useState("");
  const [selectedQue, setSelectedQue] = useState({
    question: "",
    questionedBy: "",
  });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const userRef = useRef(getItem("user"));
  const inputRef = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRef.current?.islogged) {
      navigate("/");
    }
  }, [userRef.current?.islogged]);

  const inputHandler = (event) => {
    setAnswerInput(event.target.value);
  };

  const cancelPage = () => {
    navigate("/home");
  };

  const handleQueAns = (question, questionedBy, index) => {
    setSelectedQue({
      question,
      questionedBy,
    });
    setSelectedQuestionIndex(index);
    inputRef.current.focus();
  };

  const addAnswerInputHandler = () => {
    if (selectedQue.questionedBy && answerInput !== "") {
      setQueAns([
        ...queAns,
        {
          id: (queAns.length + 1).toString(),
          answeredBy: userRef.current?.username,
          questionedBy: selectedQue.questionedBy,
          question: selectedQue.question,
          answer: answerInput,
        },
      ]);
      setAnswerInput("");
      alert("Answer added");
      setSelectedQuestionIndex(null);
    } else {
      alert(
        "Please select a question from the questions list and write your answer."
      );
    }
  };

  return (
    <>
      <NavBar />
      <div className="ansContainer">
        <div className="answerContainer">
          <div className="answerquestionContainer">
            <h2 className="ansHeader">Select Question</h2>
            <div>
              {ques.map((question, index) => {
                return (
                  <p
                    key={index}
                    className={`questionAns ${
                      selectedQuestionIndex === index ? "active" : ""
                    }`}
                    onClick={() =>
                      handleQueAns(
                        question.question,
                        question.questionedBy,
                        index
                      )
                    }
                  >
                    {question.question}
                  </p>
                );
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
            ref={inputRef}
          ></textarea>
        </div>

        <div className="answerBtnContainer">
          <button className="pageBtn" onClick={cancelPage}>
            Cancel
          </button>
          <button className="pageBtn" onClick={addAnswerInputHandler}>
            Add Answer
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddAnswer;
