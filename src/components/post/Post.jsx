// Post.js
import React, { useState, useEffect } from "react";
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const calculateTimeDifference = (uploadTime) => {
  const now = new Date();
  const uploadDate = new Date(uploadTime);
  const timeDifferenceInMinutes = Math.floor((now - uploadDate) / (1000 * 60));

  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes} min ago`;
  } else if (timeDifferenceInMinutes < 720) {
    // Less than 12 hours
    return `${Math.floor(timeDifferenceInMinutes / 60)} hours ago`;
  } else {
    // More than 12 hours
    return `${Math.floor(timeDifferenceInMinutes / 1440)} days ago`;
  }
};

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  // TEMPORARY: Assuming liked is a property in the post data
  const liked = post.likes && post.likes.length > 0;

  const handleLike = () => {};

  const timeAgo = calculateTimeDifference(post.uploadTime);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.user.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.user._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{`${post.user.firstName} ${post.user.lastName}`}</span>
              </Link>
              <span className="date">{timeAgo}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={() => handleLike()}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {post.likes.length}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {post.comments.length}
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments comments={post.comments} />}
      </div>
    </div>
  );
};

export default Post;
