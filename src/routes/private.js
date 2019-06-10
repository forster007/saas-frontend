import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Store from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (Store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  />
);

export default PrivateRoute;
