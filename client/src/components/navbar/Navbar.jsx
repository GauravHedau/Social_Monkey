import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import profilePic from "../../assets/its me.jpeg";
import Logo from "../../assets/new logo.png";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Monkey</span>
        </Link>
        <Link to="./"><HomeOutlinedIcon className="navIcon" /></Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon className="navIcon" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="navIcon" onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon className="navIcon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <EmailOutlinedIcon className="navIcon" style={{ color: "brown" }} />
        <NotificationsOutlinedIcon
          className="navIcon"
          style={{ color: "orange" }}
        />
        <a href="./login">
          <LogoutIcon className="navIcon" />
        </a>
        <div className="user">
          <Link to="./profile">
            {" "}
            <img src={profilePic} alt="" />
          </Link>
          <a href="./profile">{currentUser.name}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
