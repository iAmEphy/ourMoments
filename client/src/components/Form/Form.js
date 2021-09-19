
import React, { useState, useEffect } from 'react';
//jsx. 
import { TextField, Button, Typography, Paper } from '@material-ui/core';
//so we can dispatch actions
import { useDispatch, useSelector } from 'react-redux';

//convert image file
import FileBase from 'react-file-base64';

import useStyles from './styles';

//to createPost and updatepost
import { createPost, updatePost } from '../../actions/posts';

//
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ 
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: '' });
  
  //                             if we have current id, not null with ?, then loop over state.post.find method, find that post
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
 
  const dispatch = useDispatch();

  const classes = useStyles();
  //when post values change, then run this function. if post exist, populate post data into form
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //clear button to clear everything on form
  const clear = () => {
    setCurrentId(0);
    setPostData({ 
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: '' });
  };

  //handler function. 
  //always e.preventdefault not to get refresh in browser
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      //make the request when Submit button is pressed
      //update post
      dispatch(createPost(postData));
      clear();
    } 
    else{
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    //Paper is like a div with whiteish background.
    //imported all the classes already
    //form
    //textfield- self closing tag. 
    //where to store value? store in postData object, each object key is specific text field
    //update one of the objects properties. callback (event) >>> setter method for that state
          //creator = to event target value. spread post data using ... line 70

    //ternary. line 78. Editing. if it exist, then editing another special moment, if not, then post title
    <Paper className={classes.paper}>
      <form autoComplete="off" 
          noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography 
          variant="h6">{currentId ? `Editing "${post.title}"` : 'Another Special Moment'}</Typography>
        <TextField 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth value={postData.creator} 
          
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        
        <TextField 
          name="message" 
          variant="outlined" 
          label="Description" 
          fullWidth multiline rows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        
        <TextField 
          name="tags" 
          variant="outlined" 
          label="Tags (comma separated)" 
          fullWidth value={postData.tags} 
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        
        <div className={classes.fileInput}>
          
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        
        <Button className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth>Submit</Button>
        
        <Button variant="contained" 
          color="secondary" 
          size="small" 
          onClick={clear} 
          fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

//

export default Form;