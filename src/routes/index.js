import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import Guest from './guest';
import history from './history';
import Private from './private';

import Main from '../pages/Main';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest component={SignIn} path="/signin" />
      <Guest component={SignUp} path="/signup" />
      <Private component={Main} exact path="/" />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
