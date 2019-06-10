import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as zabbixes } from './zabbixes';

export default history => combineReducers({
  auth,
  toastr,
  router: connectRouter(history),
  zabbixes,
});
