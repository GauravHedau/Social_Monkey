import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  const firstName = user.firstName;
  const profilePic = user.profilePic;

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img src={profilePic} alt="profileImg" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a
              href="http://facebook.com"
              style={{ color: "blue" }}
              target="blank"
            >
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a
              href="http://instagram.com"
              style={{ color: "red" }}
              target="blank"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="http://twitter.com"
              style={{ color: "lightblue" }}
              target="blank"
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
              href="http://linkedin.com"
              style={{ color: "blue" }}
              target="blank"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{firstName}</span>

            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
