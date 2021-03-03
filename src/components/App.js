import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Footer from './Footer';
import HomeScreen from './home/HomeScreen';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Switch>
            <Route path="/novel_category"></Route>
            <Route exact path="/">
              <Container className={classes.cardGrid} maxWidth="md">
                <HomeScreen />
              </Container>
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
