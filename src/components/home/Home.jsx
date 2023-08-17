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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            <div className="icon" onClick={homePage}>
              <Tooltip title="Home">
                <HomeIcon className="iconsHeader activeIcon" />
              </Tooltip>
            </div>
            <div className="icon" onClick={questionListPage}>
              <Tooltip title="Question-List">
                <ListAltIcon className="iconsHeader" />
              </Tooltip>
            </div>
            <div className="icon" onClick={answerHandler}>
              <Tooltip title="Add-Answer">
                <QuestionAnswerOutlinedIcon className="iconsHeader" />
              </Tooltip>
            </div>
            <div className="icon" onClick={spacePage}>
              <Tooltip title="Spaces">
                <GroupsIcon className="iconsHeader" />
              </Tooltip>
            </div>
            <div className="icon" onClick={notificationPage}>
              <Tooltip title="Notification">
                <NotificationsIcon className="iconsHeader" />
              </Tooltip>
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
            <div className="dropdownNav">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon className="menu" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>{userRef.current?.username}</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
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
                          <ThumbUpIcon
                            className="voteIcon"
                            onClick={() => likeHandler(list.id)}
                            style={{
                              color: list.upvote ? "green" : "#656565",
                            }}
                          />
                        </span>
                        <span className="voteAlign">
                          <ThumbDownIcon
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
                        <ThumbUpIcon
                          className="voteIcon"
                          onClick={() => likeHandler(list.id)}
                          style={{ color: list.upvote ? "green" : "#656565" }}
                        />
                      </span>
                      <span className="voteAlign">
                        <ThumbDownIcon
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
