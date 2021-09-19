import React from 'react';
import Post from './Post/Post';
//^ to be able to use <Post > fragment

//allign the posts using Grid
import { Grid, CircularProgress } from '@material-ui/core';
//fetch data from global redux store = useSelector
import { useSelector } from 'react-redux';


import useStyles from './styles';

const Posts = ({ setCurrentId }) => {

  //hook.                  callback function. access to whole global state. then return state.posts. posts from reducers > index.js
  const posts = useSelector((state) => state.posts);
  
  const classes = useStyles();


  //<> from react fragment to add multiple things </>

  return (
    //CircularProgress is loading spinning icon
    //if no posts, then show the loading icon
    // 
    !posts.length ? <CircularProgress /> : (
      <Grid 
        className={classes.container} 
        container alignItems="stretch" 
        spacing={3}>
      {posts.map((post) => (
          <Grid 
            key={post._id} 
              item xs={12} 
                sm={6} 
                  md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;