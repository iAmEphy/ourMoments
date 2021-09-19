//axios api call
import axios from 'axios';

//hosted on localhost
const url = 'https://mymemoriess.herokuapp.com/posts';

//export gets posts using axios
export const fetchPosts = () => axios.get(url);

//creat post.            takes in entire post.  post to url, date of sending
export const createPost = (newPost) => axios.post(url, newPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

//update post.             receiving id and post-data. axios going to update it
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//delete post             get id, axios delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);