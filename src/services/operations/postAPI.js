import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { postEndpoints } from "../apis";

const {
  CREATE_POST,
  GET_ALLPOST,
  ADD_LIKE_POST,
  UN_LIKE_POST,
  ADD_COMMENT_POST,
  DELETE_COMMENT_POST,
} = postEndpoints;

export const createPost = async (postData, token) => {
  let result = null;
  const toastId = toast.loading("Creating Post...");

  try {
    const response = await apiConnector("POST", CREATE_POST, postData, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE POST API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Create Post");
    }

    toast.success("Post Created Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("CREATE POST API ERROR:", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};

// postsService.js

// Function to get all posts
export const getAllPosts = async () => {
  let result = [];
  const toastId = toast.loading("Loading Posts...");

  try {
    const response = await apiConnector("GET", GET_ALLPOST);

    console.log("GET ALL POSTS API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Posts");
    }

    toast.dismiss(toastId);
    result = response?.data?.data;
  } catch (error) {
    console.error("GET ALL POSTS API ERROR:", error);
    toast.error(error.message);
  }

  return result;
};

// Function to add like to a post
export const addLikeToPost = async (postId, token) => {
  let result = null;
  const toastId = toast.loading("Adding Like...");

  try {
    const response = await apiConnector(
      "POST",
      ADD_LIKE_POST,
      { postId },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("ADD LIKE API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Like");
    }

    toast.success("Like Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("ADD LIKE API ERROR:", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};

// Function to remove like from a post
export const removeLikeFromPost = async (postId, token) => {
  let result = null;
  const toastId = toast.loading("Removing Like...");

  try {
    const response = await apiConnector(
      "DELETE",
      UN_LIKE_POST,
      {
        postId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("REMOVE LIKE API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Remove Like");
    }

    toast.success("Like Removed Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("REMOVE LIKE API ERROR:", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};

// Function to add comment to a post
export const addCommentToPost = async (postId, comment, token) => {
  let result = null;
  const toastId = toast.loading("Adding Comment...");

  try {
    const response = await apiConnector(
      "POST",
      ADD_COMMENT_POST,
      {
        postId,
        comment,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("ADD COMMENT API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Comment");
    }

    toast.success("Comment Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("ADD COMMENT API ERROR:", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};

// Function to delete comment from a post
export const deleteCommentFromPost = async (postId, commentId, token) => {
  let result = null;
  const toastId = toast.loading("Deleting Comment...");

  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_COMMENT_POST,
      {
        postId,
        commentId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("DELETE COMMENT API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Comment");
    }

    toast.success("Comment Deleted Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("DELETE COMMENT API ERROR:", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};
