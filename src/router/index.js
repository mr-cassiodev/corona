import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '~/pages/Home';
import WorldPage from '~/pages/World';
import NewsPage from '~/pages/News';
import MyStatePage from '~/pages/MyState';



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/world" component={WorldPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/local" component={MyStatePage} />

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
