import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { getItem } from "../../getUser";
import { auth } from "../../firebase";
import logo from "../../assets/Quora-Logo.png";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";

const NavBar = () => {
  const userRef = useRef(getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case "/home":
        setActiveButton("home");
        break;
      case "/questions":
        setActiveButton("questions");
        break;
      case "/add-answers":
        setActiveButton("addAnswers");
        break;
      case "/spaces":
        setActiveButton("spaces");
        break;
      case "/notifications":
        setActiveButton("notifications");
        break;
      case "/add-questions":
        setActiveButton("addQuestions");
        break;
      default:
        setActiveButton("");
        break;
    }
  }, [location]);

  const questionHandler = () => {
    navigate("/add-questions");
  };

  const answerHandler = () => {
    navigate("/add-answers");
  };

  const notificationPage = () => {
    navigate("/notifications");
  };

  const spacePage = () => {
    navigate("/spaces");
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
  };

  const questionListPage = () => {
    navigate("/questions");
  };

  const homePage = () => {
    navigate("/home");
  };

  return (
    <div className="headerContainer navBar">
      <div className="navbarIcons">
        <div>
          <img src={logo} alt="Quora" className="header2" onClick={homePage} />
        </div>
        <div className="headerIcons smallDevicesIcons">
          <div className="icon" onClick={homePage}>
            <Tooltip title="Home">
              <HomeIcon
                className={`iconsHeader ${
                  activeButton === "home" ? "iconActive" : ""
                }`}
              />
            </Tooltip>
          </div>

          <div className="icon" onClick={questionListPage}>
            <Tooltip title="Question List">
              <ListAltIcon
                className={`iconsHeader ${
                  activeButton === "questions" ? "iconActive" : ""
                }`}
              />
            </Tooltip>
          </div>

          <div className="icon" onClick={answerHandler}>
            <Tooltip title="Add Answer">
              <QuestionAnswerOutlinedIcon
                className={`iconsHeader ${
                  activeButton === "addAnswers" ? "iconActive" : ""
                }`}
              />
            </Tooltip>
          </div>

          <div className="icon" onClick={spacePage}>
            <Tooltip title="Spaces">
              <GroupsIcon
                className={`iconsHeader ${
                  activeButton === "spaces" ? "iconActive" : ""
                }`}
              />
            </Tooltip>
          </div>

          <div className="icon" onClick={notificationPage}>
            <Tooltip title="Notification">
              <NotificationsIcon
                className={`iconsHeader ${
                  activeButton === "notifications" ? "iconActive" : ""
                }`}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="btn">
        <button
          className={`bttn ${
            activeButton === "addQuestions" ? "bttnActive" : ""
          }`}
          onClick={questionHandler}
        >
          Add questions
        </button>

        <button onClick={logoutHandler} className="logoutBttn">
          <Avatar className="avatar logout" title="Logout" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
