import NavBar from "../navBar/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import site from "../../assets/site.png";

const Notifications = () => {
  return (
    <>
      <NavBar />
      <div className="main iconsPages">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="imageSite">
          <img src={site} alt="Site under construction" className="siteImage" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;
