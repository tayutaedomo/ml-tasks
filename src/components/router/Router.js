import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layout/DefaultLayout';
import Page404 from '../Page404';
import HomeScreen from '../home/HomeScreen';
import NovelCategoryScreen from '../novel_category/NovelCategoryScreen';

const Router = () => {
  return (
    <BrowserRouter>
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
        <Route exact path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
