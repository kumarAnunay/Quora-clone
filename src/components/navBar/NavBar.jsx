import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { getItem } from "../../getUser";
import { auth } from "../../firebase";
import logo from "../../assets/Quora-Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
  );
};

export default NavBar;
