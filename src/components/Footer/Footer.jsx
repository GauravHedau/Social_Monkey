import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../../assets/its me.jpeg";
import AddIcon from "@mui/icons-material/Add";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./footer.scss";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch } from "react-redux";
import { logout } from "../../services/operations/authApi";

const Footer = () => {
  const location = useLocation();
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="footer">
      {location.pathname === "/profile" ? (
        <Link to="/">
          <HomeOutlinedIcon className="navIcon" />
        </Link>
      ) : (
        <HomeIcon className="navIcon" />
      )}

      <button>
        <SearchOutlinedIcon className="navIcon" />
      </button>
      <button>
        <AddIcon className="navIcon" />
      </button>
      <button onClick={handleLogout}>
        <LogoutIcon className="navIcon nav3" />
      </button>

      {location.pathname === "/profile" ? (
        <button>
          <EditIcon className="navIcon" />
        </button>
      ) : (
        <Link to="./profile">
          <img src={profilePic} alt="" />
        </Link>
      )}
    </div>
  );
};

export default Footer;
