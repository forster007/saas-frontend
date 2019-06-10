import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../ducks/auth';
import { ZabbixesTypes } from '../ducks/zabbixes';

import { signIn, signOut } from './auth';
import { getZabbixes, storeZabbix } from './zabbixes';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(ZabbixesTypes.GET_ZABBIXES_REQUEST, getZabbixes),
    takeLatest(ZabbixesTypes.STORE_ZABBIX_REQUEST, storeZabbix),
  ]);
}
