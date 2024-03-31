import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Logo from "../../assets/new logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authApi";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const { user } = useSelector((state) => state.profile);

  //another way we can fetch from local storage also
  // const user = JSON.parse(localStorage.getItem("user"));
  const firstName = user.firstName;
  const profilePic = user.profilePic;

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" />
          <span>Social Monkey</span>
        </Link>
        {location.pathname === "/profile" ? (
          <Link to="/">
            <HomeOutlinedIcon className="navIcon homeIcon " />
          </Link>
        ) : (
          <HomeIcon className="navIcon homeIcon" />
        )}
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
        <FavoriteBorderIcon className="navIcon nav1" />
        <MessageIcon className="navIcon nav2" />
        <button onClick={handleLogout}>
          <LogoutIcon className="navIcon nav3" />
        </button>
        <div className="user">
          <Link to="./profile">
            <img src={profilePic} alt="" />
          </Link>
          <a href="./profile">{firstName}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
