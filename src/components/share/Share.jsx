import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useSelector } from "react-redux";

const Share = () => {
  const { user } = useSelector((state) => state.profile);

  const firstName = user.firstName;
  const profilePic = user.profilePic;

  function handleSubmit() {}

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={profilePic} alt="" />
          <input type="text" placeholder={`What's on your mind ${firstName}`} />
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="bottom">
            <div className="left">
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                // onChange={handleFileChange}
              />
              <label htmlFor="file">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Add Image</span>
                </div>
              </label>
              <div className="item">
                <img src={Map} alt="" />
                <span>Add Place</span>
              </div>
              <div className="item">
                <img src={Friend} alt="" />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className="right">
              <button type="submit">Share</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
