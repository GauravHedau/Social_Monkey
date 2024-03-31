// postsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    addLikePost: (state, action) => {
      const { postId, userId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes.push(userId);
      }
    },
    unLikePost: (state, action) => {
      const { postId, userId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes = post.likes.filter((id) => id !== userId);
      }
    },
    addCommentPost: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
    deleteCommentPost: (state, action) => {
      const { postId, commentId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments = post.comments.filter(
          (comment) => comment.id !== commentId
        );
      }
    },
  },
});

export const {
  createPost,
  getAllPosts,
  addLikePost,
  unLikePost,
  addCommentPost,
  deleteCommentPost,
} = postsSlice.actions;

export default postsSlice.reducer;
