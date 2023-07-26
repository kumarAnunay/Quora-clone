import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Questions = ({ ques }) => {
  return (
    <>
      <NavBar />
      <div className="main iconsPages">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="questionListPAge quesionListWidth">
          <div className="queContainer">
            <h2 className="questionHeader">Question List</h2>
            <div className="questionHome">
              {ques?.map((list) => {
                return (
                  <p className="questionList" key={list.id}>
                    Q. {list.question}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Questions;
