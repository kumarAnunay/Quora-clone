import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../getUser";
import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import { auth } from "../../firebase";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import logo from "../../assets/Quora-Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Home = ({ ques, queAns, setQueAns }) => {
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

  const homePage = () => {
    navigate("/home");
  };

  const questionListPage = () => {
    navigate("/questions");
  };

  const notificationPage = () => {
    navigate("/notifications");
  };

  const spacePage = () => {
    navigate("/spaces");
  };

  const likeHandler = (questionId) => {
    setQueAns((prevQueAns) => {
      return prevQueAns.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            upvote: true,
            downvote: false,
          };
        }
        return question;
      });
    });
  };

  const dislikeHandler = (questionId) => {
    setQueAns((prevQueAns) => {
      return prevQueAns.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            upvote: false,
            downvote: true,
          };
        }
        return question;
      });
    });
  };

  const deleteHandler = (id) => {
    const queAnsFilter = queAns?.filter((item) => item.id !== id);
    setQueAns(queAnsFilter);
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
          <div className="headerIcons">
            <div className="icon" title="Home" onClick={homePage}>
              <HomeIcon className="iconsHeader activeIcon" />
            </div>
            <div
              className="icon"
              title="Question-List"
              onClick={questionListPage}
            >
              <ListAltIcon className="iconsHeader" />
            </div>
            <div className="icon" title="Add-Answer" onClick={answerHandler}>
              <QuestionAnswerOutlinedIcon className="iconsHeader" />
            </div>
            <div className="icon" title="Spaces" onClick={spacePage}>
              <GroupsIcon className="iconsHeader" />
            </div>
            <div
              className="icon"
              title="Notification"
              onClick={notificationPage}
            >
              <NotificationsIcon className="iconsHeader" />
            </div>
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
            <button onClick={logoutHandler} className="logoutBttn">
              <Avatar className="avatar logout" />
            </button>
          </div>
        </div>

        <div className="section">
          <div className="sidebar">
            <Sidebar />
          </div>
          {queSearch ? (
            <div className="queAnsContainer">
              {queSearch.length === 0 ? (
                <h3 className="noMatch searchQueContainer">No results found</h3>
              ) : (
                queSearch.map((list, index) => {
                  return (
                    <div className="list searchQueContainer" key={index}>
                      <div className="deleteBtnContainer">
                        <button
                          onClick={() => {
                            deleteHandler(list.id);
                          }}
                          className="deleteBtn"
                        >
                          x
                        </button>
                      </div>

                      <div className="avatarName">
                        <Avatar className="avatar" />
                        <div className="nameDate">
                          <h2 className="answeredBy">{list.answeredBy}</h2>
                          <div className="date">
                            {list?.date || ""}
                            {"  -  "}
                            {list?.time || ""}
                          </div>
                        </div>
                      </div>
                      <h3 className="homeQuestion">{list.question}</h3>
                      <p className="answer">- {list.answer}</p>
                      <div className="vote">
                        <span className="voteAlign">
                          <ThumbUpOutlinedIcon
                            className="voteIcon"
                            onClick={() => likeHandler(list.id)}
                            style={{
                              color: list.upvote ? "green" : "#656565",
                            }}
                          />
                        </span>
                        <span className="voteAlign">
                          <ThumbDownOffAltOutlinedIcon
                            className="voteIcon"
                            onClick={() => dislikeHandler(list.id)}
                            style={{
                              color: list.downvote ? "red" : "#656565",
                            }}
                          />
                        </span>
                      </div>
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
                    <div className="deleteBtnContainer">
                      <button
                        onClick={() => {
                          deleteHandler(list.id);
                        }}
                        className="deleteBtn"
                      >
                        x
                      </button>
                    </div>

                    <div className="avatarName">
                      <Avatar className="avatar" />
                      <div className="nameDate">
                        <h2 className="answeredBy">{list.answeredBy}</h2>
                        <div className="date">
                          {list?.date || ""}
                          {"  -  "}
                          {list?.time || ""}
                        </div>
                      </div>
                    </div>
                    <h3 className="homeQuestion">{list.question}</h3>
                    <p className="answer">- {list.answer}</p>
                    <div className="vote">
                      <span className="voteAlign">
                        <ThumbUpOutlinedIcon
                          className="voteIcon"
                          onClick={() => likeHandler(list.id)}
                          style={{ color: list.upvote ? "green" : "#656565" }}
                        />
                      </span>
                      <span className="voteAlign">
                        <ThumbDownOffAltOutlinedIcon
                          className="voteIcon"
                          onClick={() => dislikeHandler(list.id)}
                          style={{ color: list.downvote ? "red" : "#656565" }}
                        />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
