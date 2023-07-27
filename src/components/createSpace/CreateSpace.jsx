import NavBar from "../navBar/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import launching from "../../assets/Launching.jpg";

const CreateSpace = () => {
  return (
    <>
      <NavBar />
      <div className="main iconsPages">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="imageSite">
          <img
            src={launching}
            alt="Site under construction"
            className="siteImage createSpace"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateSpace;
