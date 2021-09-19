import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//import everything as actions as api
import * as api from '../api/index.js';

//Action creators
/* const getPost = () => async (dispatch) => {
  action is an object                payload is data where we store all of our posts
  const action = { type: 'FETCH_ALL', payload[] }

  dispatch(action);
  dispatch(action) instead of return action cause of redux thunk
}
Have to use redux thunk to specify an additional arrow function. async to access dispatch

then try{
  fetch data from api. getting api response for data object from backend (api.fetchPosts)
  const { data } = await api.fetchPosts();
}
catch{

}

*/
//export dispatch getPosts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    //                     making post api request to backend server
    const { data } = await api.createPost(post);

    //dispatch action.  create action  and payload of data
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};