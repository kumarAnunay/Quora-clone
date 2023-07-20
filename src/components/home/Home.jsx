import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import { auth } from "../../firebase";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import logo from "../../assets/Quora-Logo.png";

const Home = ({ ques, queAns }) => {
  const [input, setInput] = useState("");
  const [queSearch, setQueSearch] = useState(null);
  const userRef = useRef(getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("quesList", JSON.stringify(ques));
  }, [ques]);

  useEffect(() => {
    localStorage.setItem("queAnsList", JSON.stringify(queAns));
  }, [queAns]);

  const inputHandler = (event) => {
    setInput(event.target.value);
    setQueSearch(null);
  };

  const searchHandler = (event) => {
    if (event.keyCode === 13) {
      const queAnsFilter = queAns?.filter((item) =>
        item.question.toLowerCase().includes(input.toLowerCase())
      );
      setQueSearch(queAnsFilter);
    }
  };

  const questionHandler = () => {
    navigate("/add-questions");
  };

  const answerHandler = () => {
    navigate("/add-answers");
  };

  const logoutHandler = () => {
    if (window.confirm("Do you want to Logout?")) {
      auth
        .signOut()
        .then(() => {
          navigate("/");
          window.location.reload();
          localStorage.setItem(
            "user",
            JSON.stringify({ ...userRef.current, islogged: false })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //To delete
    // localStorage.removeItem("user");
  };

  const scrollToQuestion = (question) => {
    const queAnsIndex = queAns.findIndex((item) => item.question === question);
    if (queAnsIndex !== -1) {
      const listDivs = document.querySelectorAll(".list");
      const targetDiv = listDivs[queAnsIndex];
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const homePage = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="main">
        <div className="headerContainer">
          <div>
            <img
              src={logo}
              alt="Quora"
              className="header2"
              onClick={homePage}
            />
          </div>
          <div className="searchContainer">
            <input
              type="text"
              className="searchInput"
              id="search"
              value={input}
              onChange={inputHandler}
              placeholder="   Search question here..."
              onKeyDown={searchHandler}
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

        <div className="section">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="quesAndAnsContainer">
            {queSearch ? (
              <div className="queAnsContainer">
                {queSearch.length === 0 ? (
                  <h3 className="noMatch">No results found</h3>
                ) : (
                  queSearch.map((list, index) => {
                    return (
                      <div className="list" key={index}>
                        <div className="avatarName">
                          <Avatar className="avatar" />
                          <h2 className="answeredBy">{list.answeredBy}</h2>
                        </div>
                        <h3 className="homeQuestion">{list.question}</h3>
                        <p className="answer">- {list.answer}</p>
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              <div className="queAnsContainer">
                {queAns.map((list, index) => {
                  return (
                    <div className="list" key={index}>
                      <div className="avatarName">
                        <Avatar className="avatar" />
                        <h2 className="answeredBy">{list.answeredBy}</h2>
                      </div>
                      <h3 className="homeQuestion">{list.question}</h3>
                      <p className="answer">- {list.answer}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="queContainer">
              <h2 className="questionHeader">Question List</h2>
              <div className="questionHome">
                {ques.map((list) => {
                  return (
                    <p
                      className="questionList"
                      key={list.id}
                      onClick={() => scrollToQuestion(list.question)}
                    >
                      {list.question}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
