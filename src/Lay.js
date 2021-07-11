import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Leftside from './components/Leftside'
import Center from './components/Center'
import Rightbar from './components/Rightbar'
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container >
      <Hidden smDown>
        <Grid item xs={3} >
         <Leftside/>
        </Grid>
      </Hidden>
        <Grid item lg={6} md={9} xs={12}>
          <Center />
          </Grid>
         
        {/* <Router>
        <Switch>
          <Route exact path="/">
            <Center />
          </Route>
          <Route path ="/register">
            <Register/>
          </Route>
        </Switch>
      </Router> */}
          
        {/* <Write/> */}
        {/* <Setting /> */}
        {/* <Login/> */}
        {/* <Register/> */}
       

        <Hidden mdDown>

          <Grid item xs={3} >
            <Rightbar />
          </Grid>

        </Hidden>

      </Grid>

    </div>

  );
}

