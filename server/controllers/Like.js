const Like = require("../models/Like");
const Post = require("../models/Post");

exports.addLike = async (req, res) => {
  try {
    const { user, post } = req.body;

    if (!user || !post) {
      return res.status(404).json({
        success: false,
        message: "All feilds are required",
      });
    }
    //create a comment object
    const like = new Like({
      user,
      post,
    });

    //save the new comment into the database
    const savedLike = await like.save();

    //find the post by Id, add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike },
      },
      { new: true }
    )
      .populate("likes") //populate the comments array with comment documents
      .exec(); //execute

    return res.status(200).json({
      success: true,
      data: updatedPost,
      message: "Like Successfull",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
      error: err.message,
    });
  }
};

exports.unLikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    //find and delete the like collection me se
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      err: "Error in unliking a post ",
    });
  }
};
