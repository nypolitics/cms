import React, { Component } from 'react'
import NavBar from './components/NavBar'
import SimpleCard from './components/Card'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={3}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>  
        <Grid item xs={12}>
          
          <SimpleCard />
          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        
        </Grid>
      
    </div>
  );
}

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
        <CenteredGrid />


      </div>
    )
  }
}
export default App
