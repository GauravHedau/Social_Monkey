import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"
                alt=""
              />
              <span>Virat Kohli</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Ignore</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                srcset="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQahko2srzFkCpGBGTDEYmc_VJodZGHtpGLKDqTSwp4KjUZLDGzN2w6Bm-vHQ3CVKNqDFyqmoG4ywIXFpc"
                alt=""
              />
              <span>Ben Strokes</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Ignore</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <p>
                <span>Rahul</span> changed their cover picture
              </p>
            </div>
            <span>37m </span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1689187541~exp=1689188141~hmac=34773ed245eb91f4dfae93ede3d49945dbfea937f3bc4bd3e46776d74f2ffec2"
                alt=""
              />
              <p>
                <span>Anuj </span> update their profile photo
              </p>
            </div>
            <span>2hr </span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <p>
                <span>Priya</span> add a story
              </p>
            </div>
            <span>5hr</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Cristopher Roy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Dawid Malan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="offline" />
              <span>Angela Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Sofia Jones</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5155733/pexels-photo-5155733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="offline" />
              <span>Brown Shua</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Danial Dawid</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>John Cena</span>
            </div>
          </div>
         
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Smita Rodri</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="offline" />
              <span>Rohit Kumar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
