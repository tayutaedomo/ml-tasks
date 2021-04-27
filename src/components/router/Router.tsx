import React, { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layout/DefaultLayout';
import Page404 from '../Page404';
import Home from '../home/Home';
import NovelCategory from '../novel_category/NovelCategory';

const Router: VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/novel_category">
          <DefaultLayout>
            <NovelCategory />
          </DefaultLayout>
        </Route>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
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
