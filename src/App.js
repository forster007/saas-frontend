import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Routes from './routes';
import Store from './store';
import { GlobalStyles } from './styles';

const App = () => (
  <Provider store={Store}>
    <Fragment>
      <Routes />
      <ReduxToastr />
      <GlobalStyles />
    </Fragment>
  </Provider>
);

export default App;
