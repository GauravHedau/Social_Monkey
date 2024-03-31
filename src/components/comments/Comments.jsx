import React from "react";
import "./comments.scss";
import { useSelector } from "react-redux";

const Comments = ({ comments }) => {
  const { user } = useSelector((state) => state.profile);
  const profilePic = user.profilePic;

  const calculateTimeDifference = (commentTime) => {
    const now = new Date();
    const commentDate = new Date(commentTime);
    const timeDifferenceInMinutes = Math.floor(
      (now - commentDate) / (1000 * 60)
    );

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

  return (
    <div className="comments">
      <div className="write">
        {/* Assuming you have a profile picture for the user who is writing the comment */}
        <img src={profilePic} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          {/* Assuming each comment in the post data has a user object */}
          <img src={comment.user.profilePic} alt="" />
          <div className="info">
            <span>{`${comment.user.firstName} ${comment.user.lastName}`}</span>
            <p>{comment.text}</p>
          </div>
          {/* Assuming there is a timestamp property in the comment data */}
          <span className="date">
            {calculateTimeDifference(comment.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
