import React from "react";
import "./rightBar.scss";

const userData = [
  {
    id: 1,
    name: "Virat Kohli",
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
  },
  {
    id: 2,
    name: "Ben Strokes",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQahko2srzFkCpGBGTDEYmc_VJodZGHtpGLKDqTSwp4KjUZLDGzN2w6Bm-vHQ3CVKNqDFyqmoG4ywIXFpc",
  },
  // Add more user data as needed
];

const activityData = [
  {
    id: 1,
    name: "Finch",
    image:
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    activity: "changed their cover photo",
    time: "1hr",
  },
  {
    id: 2,
    name: "Anuj",
    image:
      "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1689187541~exp=1689188141~hmac=34773ed245eb91f4dfae93ede3d49945dbfea937f3bc4bd3e46776d74f2ffec2",
    activity: "update their profile photo",
    time: "2hr",
  },
  {
    id: 3,
    name: "Priya",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    activity: "add a story",
    time: "5hr",
  },
  // Add more activity data as needed
];

const onlineFriendsData = [
  {
    id: 1,
    name: "Cristopher Roy",
    image:
      "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 2,
    name: "Dawid Malan",
    image:
      "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 3,
    name: "Angela Smith",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: false,
  },
  {
    id: 4,
    name: "Sofia Jones",
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 5,
    name: "Brown Shua",
    image:
      "https://images.pexels.com/photos/5155733/pexels-photo-5155733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: false,
  },
  {
    id: 6,
    name: "Danial Dawid",
    image:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 7,
    name: "John Cena",
    image:
      "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 8,
    name: "Smita Rodri",
    image:
      "https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: true,
  },
  {
    id: 9,
    name: "Rohit Kumar",
    image:
      "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    online: false,
  },
];

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {userData.map((user) => (
            <div key={user.id} className="user">
              <div className="userInfo">
                <img src={user.image} alt="" />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Ignore</button>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {activityData.map((activity) => (
            <div key={activity.id} className="user">
              <div className="userInfo">
                <img src={activity.image} alt="" />
                <p>
                  <span>{activity.name}</span> {activity.activity}
                </p>
              </div>
              <span>{activity.time}</span>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Online Friends</span>
          {onlineFriendsData.map((friend) => (
            <div key={friend.id} className="user">
              <div className="userInfo">
                <img src={friend.image} alt="" />
                <div className={friend.online ? "online" : "offline"} />
                <span>{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
