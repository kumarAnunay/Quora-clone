import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import NavBar from "../navBar/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAnswer = ({ ques, queAns, setQueAns }) => {
  const [answerInput, setAnswerInput] = useState("");
  const [selectedQue, setSelectedQue] = useState({
    question: "",
    questionedBy: "",
  });
  const [answerAdded, setAnswerAdded] = useState(false);
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
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const current = new Date();
    const currentMonth = current.getMonth();
    const currentYear = current.getFullYear();
    const currentDay = current.getDate();

    const monthCheck = month[currentMonth];

    const dateCheck = `${currentDay} ${monthCheck} ${currentYear}`;

    const time = new Date().toLocaleTimeString();

    if (selectedQue.questionedBy && answerInput !== "") {
      setQueAns([
        ...queAns,
        {
          id: queAns.length + 1,
          answeredBy: userRef.current?.username,
          questionedBy: selectedQue.questionedBy,
          question: selectedQue.question,
          answer: answerInput,
          upvote: false,
          downvote: false,
          time: time,
          date: dateCheck,
        },
      ]);
      setAnswerInput("");
      setSelectedQuestionIndex(null);
      toast.success("Answer added", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAnswerAdded(true);
    } else {
      toast.error(
        "Please select a question from the questions list and write your answer.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  useEffect(() => {
    if (answerAdded) {
      setTimeout(() => {
        navigate("/home");
      }, 3500);
    }
  }, [answerAdded]);

  return (
    <>
      <NavBar />
      <div className="main iconsPages">
        <ToastContainer />
        <div className="sidebar">
          <Sidebar />
        </div>
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
                      Q. {question.question}
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
      </div>
      <Footer />
    </>
  );
};

export default AddAnswer;
