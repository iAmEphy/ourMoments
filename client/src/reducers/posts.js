/*const reducer = (state, action) => {
// based on action type. if(action.type === 'CREATE'){ can use IF statement}
}*/
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//posts are going to be an array
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      //action.payload from actions> posts.js
      return action.payload;
    case CREATE:
      //have to send over post array. new post is stored in action.payload
      return [...posts, action.payload];
    //map print the post array.  if post.id is equal to payload, then itll update new value
    case LIKE:
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    
    //remove if post id doesnt equal the payload data
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};