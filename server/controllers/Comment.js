// import model
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// logic
exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { user, post, text } = req.body;

    if (!user || !post || !text) {
      return res.status(404).json({
        success: false,
        message: "All feilds are required",
      });
    }

    //create a comment object
    const comment = new Comment({
      user,
      post,
      text,
    });

    //save the new comment into the database
    const savedComment = await comment.save();

    //find the post by Id, add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment },
      },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec(); //execute

    return res.status(200).json({
      success: true,
      data: updatedPost,
      message: "Commment Successfull",
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

exports.deleteComment = async (req, res) => {
  try {
    const { post, comment } = req.body;

    //find and delete the like collection me se
    const deletedComment = await Comment.findOneAndDelete({
      post: post,
      _id: comment,
    });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { comments: deletedComment._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      err: "Error in Deleting comment",
    });
  }
};
