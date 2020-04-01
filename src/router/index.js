import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '~/pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
