import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <Container maxWidth="sm">
     <Box my={4}>
       <Typography variant="h4" component="h1" gutterBottom>
          React Frontend
       </Typography>
       <Typography component="div" />
          <Button variant="contained" color="primary">
               Hello World
          </Button>
      </Box>    
    </Container> 
  );

}

export default App;
