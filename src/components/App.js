import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';
import HomeScreen from './Home/HomeScreen';

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
