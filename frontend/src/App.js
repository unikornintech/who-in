import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Box, Button } from 'grommet';

import './App.css';
import AppBar from './AppBar';
import Homepage from './components/homepage';
import Login from './components/login';
// import Login from './login/login';

import NewEvent from './NewEvent/NewEvent';

const App = () => (
  <Router>
    <div>
      <header>
        <AppBar>
          <Box>
            <Link to="/">Who&apos;s In</Link>
          </Box>
          <Box direction="row">
            <Button color="primary" variant="outlined">
              <Link to="/login">Login</Link>
            </Button>
          </Box>
        </AppBar>
      </header>

      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/newEvent" render={() => <NewEvent />} />
        <Route exact path="/login" component={Login} />
        {/* <Route render={() => (<div>Miss</div>)} /> */}
        {/* <Route exact path="/about-us" component={About} /> */}
      </main>
    </div>
  </Router>
);

export default connect()(App);
