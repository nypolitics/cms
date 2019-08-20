import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
     <Box my={4}>
     <SimpleAppBar/>
       <Typography variant="h4" component="h1" gutterBottom>
          React Frontend
       </Typography>
       <Typography component="div" />
          <Button variant="contained" color="primary">
               Hello World
          </Button>
          <Copyright/>

      </Box>    
    </Container> 
  );

}

// export default App;
