import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Sofia  Jones",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: 3,
      like: 440,
      comment: 34,
    },
    {
      id: 2,
      name: "Virat Roy",
      userId: 2,
      profilePic:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",

      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      time: 39,
      like: 674,
      comment: 78,
    },
    {
      id: 3,
      name: "Anuj Sharma",
      userId: 3,
      profilePic:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1689187541~exp=1689188141~hmac=34773ed245eb91f4dfae93ede3d49945dbfea937f3bc4bd3e46776d74f2ffec2",
      desc: "Uatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: 58,
      like: 561,
      comment: 54,
    },
    {
      id: 4,
      name: "Gaurav Hedau",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquid!",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      time: 8,
      like: 310,
      comment: 44,
    },
 

    
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
