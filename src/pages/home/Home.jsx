import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useLocation } from "react-router-dom";
import Profile from "../profile/Profile";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          {location.pathname === "/profile" ? (
            <Profile />
          ) : (
            <div className="home">
              <Stories />
              <Share />
              <Posts />
            </div>
          )}
          <Footer />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
