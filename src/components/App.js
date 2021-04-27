import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './home/HomeScreen';
import NovelCategoryScreen from './novel_category/NovelCategoryScreen';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/novel_category">
            <DefaultLayout>
              <NovelCategoryScreen />
            </DefaultLayout>
          </Route>
          <Route exact path="/">
            <DefaultLayout>
              <HomeScreen />
            </DefaultLayout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
