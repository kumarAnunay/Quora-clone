import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { getItem } from "../../getUser";
import { auth } from "../../firebase";

const NavBar = () => {
  const userRef = useRef(getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/add-questions") {
      setActiveButton("questions");
    } else if (currentPath === "/add-answers") {
      setActiveButton("answers");
    }
  }, [location]);

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
  };

  return (
    <div className="headerContainer navBar">
      <div>
        <Link to="/home" className="link">
          <h2 className="header2">Quora</h2>
        </Link>
      </div>
      <div className="btn">
        <button
          className={`bttn ${activeButton === "questions" ? "bttnActive" : ""}`}
          onClick={questionHandler}
        >
          Add questions
        </button>
        <button
          className={`bttn ${activeButton === "answers" ? "bttnActive" : ""}`}
          onClick={answerHandler}
        >
          Add answers
        </button>
        <button onClick={logoutHandler} className="bttn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
