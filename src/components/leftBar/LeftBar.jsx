import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Menu item data
const menuItems = [
  { id: 1, icon: Friends, label: "Friends" },
  { id: 2, icon: Groups, label: "Groups" },
  { id: 3, icon: Market, label: "Marketplace" },
  { id: 4, icon: Watch, label: "Watch" },
  { id: 5, icon: Memories, label: "Memories" },
];

// Shortcut item data
const shortcutItems = [
  { id: 6, icon: Events, label: "Events" },
  { id: 7, icon: Gaming, label: "Gaming" },
  { id: 8, icon: Gallery, label: "Gallery" },
  { id: 9, icon: Videos, label: "Videos" },
  { id: 10, icon: Messages, label: "Messages" },
];

// Other item data
const otherItems = [
  { id: 11, icon: Tutorials, label: "Tutorials" },
  { id: 12, icon: Courses, label: "Courses" },
];

const LeftBar = () => {
  const { user } = useSelector((state) => state.profile);
  const profilePic = user.profilePic;
  const firstName = user.firstName;

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link to="./profile">
              <img src={profilePic} alt="" />
            </Link>
            <span>{firstName}</span>
          </div>
          {/* Render menu items */}
          {menuItems.map((item) => (
            <div key={item.id} className="item">
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          {/* Render shortcut items */}
          {shortcutItems.map((item) => (
            <div key={item.id} className="item">
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          {/* Render other items */}
          {otherItems.map((item) => (
            <div key={item.id} className="item">
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
