const Post = require("../models/Post");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    let { user, desc } = req.body;

    const img = req.files.img;

    const image = await uploadImageToCloudinary(img, process.env.FOLDER_NAME);
    console.log(image);

    const newPost = await Post.create({
      user,
      img: image.secure_url,
      desc,
    });

    // Update user's posts array
    await User.findByIdAndUpdate(
      user,
      { $push: { posts: newPost._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: newPost,
      message: "Post created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: err.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    .populate({
      path: "user",
      select: "firstName lastName profilePic", // Include only necessary fields
    })
      .populate("likes")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "firstName lastName profilePic", // Include only necessary fields
        },
      })
      .exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "All post fetch successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching a posts",
      error: err.message,
    });
  }
};
