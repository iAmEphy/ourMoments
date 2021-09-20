//useeffect component that mount
import React, { useState, useEffect } from 'react';
//import the image
import memories from './images/webimage.png';

//import Posts and Form
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

//add styles
import useStyles from './styles';

//import from material UI
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//allows us to dispatch an action
import { useDispatch } from 'react-redux';

//importing action for dispatch on line 32
import { getPosts } from './actions/posts';



const App = () => {
  //
  const classes = useStyles();

  //edit
  const [currentId, setCurrentId] = useState(0);
  //hook. access to dispatch
  const dispatch = useDispatch();
  
  //specifyt useeffect. dispatch an action. include in dependency array line 34
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  //<h1> App </h1>
  return (
    //Container center everything 
    //Appbar 
    //typography stands for any textual element h2. gives nice looking font
    //img Memories picture
    //Grow = simple animation
    //Grid take full width on small devices. 7 out of 12 on small/large devices
    
    //Appbar. calling styles.js appBar
    <Container maxWidth="lg">
      <AppBar 
        className={classes.appBar} 
        position="static" 
        color="inherit">
        <Typography 
          className={classes.heading} 
          variant="h2" 
          align="center">Our Exciting Moments</Typography>
        <img 
          className={classes.image} 
          src={memories} 
          alt="icon" 
          height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid 
            className={classes.mainContainer}
            container justifyContent="space-between" 
            alignItems="stretch" 
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;