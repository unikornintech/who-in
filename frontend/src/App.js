import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar';
import { Box, Grommet, Button } from 'grommet';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <AppBar>
            <Box>Title</Box>
            <Box direction='row'>
              <Button>Features</Button>
              <Button>Enterprise</Button>
              <Button>Support</Button>
              <Button color='primary' variant='outlined'>
                Login
              </Button>
            </Box>
          </AppBar>
        </header>
        <main>Body</main>
      </div>
    );
  }
}

export default connect()(App);
