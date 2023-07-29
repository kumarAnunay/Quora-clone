import NavBar from "../navBar/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Music = ({ musicQue, setMusicQue }) => {
  const likeHandler = (questionId) => {
    setMusicQue((prevQueAns) => {
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
    setMusicQue((prevQueAns) => {
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
    const queAnsFilter = musicQue?.filter((item) => item.id !== id);
    setMusicQue(queAnsFilter);
  };

  return (
    <>
      <NavBar />
      <div className="main iconsPages">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="queAnsContainer">
          {musicQue.map((list, index) => {
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
      </div>
      <Footer />
    </>
  );
};

export default Music;
