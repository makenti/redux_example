
import * as actionTypes from '../constants/actionTypes';
import * as postApi from '../api/postApi';

export const getPosts = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_POSTS_STARTED
  })

  postApi
    .getPosts()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const posts = JSON.parse(value);
              dispatch({
                type: actionTypes.ACTION_GET_POSTS_SUCCESS,
                posts,
              });
            }
          );
      }
    )

}

export const createPost = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_CREATE_POST_STARTED
  })

  postApi
    .createPost(data)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_CREATE_POST_SUCCESS,
                post: responseObject,
                posts: getState().post.posts
              });
            }
          );
      }
    )

}
