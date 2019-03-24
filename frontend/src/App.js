import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Button } from 'grommet';

import './App.css';
import AppBar from './AppBar';
import Homepage from './components/homepage';

import NewEvent from './NewEvent/NewEvent';

const App = () => (
  <Router>
    <div>
      <header>
        <AppBar>
          <Box>Title</Box>
          <Box direction="row">
            <Button>Features</Button>
            <Button>Enterprise</Button>
            <Button>Support</Button>
            <Button color="primary" variant="outlined">
              Login
            </Button>
          </Box>
        </AppBar>
      </header>

      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/newEvent" render={() => <NewEvent />} />
        {/* <Route render={() => (<div>Miss</div>)} /> */}
        {/* <Route exact path="/about-us" component={About} /> */}
      </main>
    </div>
  </Router>
);

export default connect()(App);
