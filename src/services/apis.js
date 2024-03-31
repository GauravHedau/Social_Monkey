const BASE_URL = "http://localhost:4000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
};

export const postEndpoints = {
  CREATE_POST: BASE_URL + "/post/createPost",
  GET_ALLPOST: BASE_URL + "/post/getAllPosts",
  ADD_LIKE_POST: BASE_URL + "/post/addLike",
  UN_LIKE_POST: BASE_URL + "/post/unLikePost",
  ADD_COMMENT_POST: BASE_URL + "/post/createComment",
  DELETE_COMMENT_POST: BASE_URL + "/post/deleteComment",
};
