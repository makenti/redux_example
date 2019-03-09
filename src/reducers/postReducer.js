import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const posts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_POSTS_SUCCESS:
      return action.posts;
    case actionTypes.ACTION_CREATE_POST_SUCCESS:
      return [...action.posts, action.post];
    case actionTypes.ACTION_GET_POSTS_STARTED:
    case actionTypes.ACTION_GET_POSTS_FAILED:
      return [];
    default:
      return state;
  }
};

const firstPost = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_POSTS_SUCCESS:
      return action.posts[0];
    default:
      return state;
  }
}


const post = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_POST_SUCCESS:
      return action.post;
    case actionTypes.ACTION_CREATE_POST_STARTED:
      return {};
    default:
      return state;
  }
};





const postReducer = combineReducers({
  posts,
  firstPost,
  post
});

export default postReducer;
