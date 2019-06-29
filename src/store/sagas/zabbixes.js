import { call, put } from 'redux-saga/effects';
import { actions as ToastrActions } from 'react-redux-toastr';

import API from '../../services/api';
import ZabbixesActions from '../ducks/zabbixes';

const api = API.create();

export function* getZabbixes() {
  try {
    const { data } = yield call([api, 'ZABBIXES']);
    yield put(ZabbixesActions.getZabbixesSuccess(data));
  } catch (err) {
    yield put(
      ToastrActions.add({
        type: 'error',
        title: 'Falha ao carregar Zabbix',
        message: 'Verifique as informações e tente novamente',
      }),
    );
  }
}

export function* storeZabbix({
  zbxName, zbxUrl, zbxUser, zbxPass,
}) {
  try {
    const { data } = yield call([api, 'STOREZABBIX'], {
      zbxName,
      zbxUrl,
      zbxUser,
      zbxPass,
    });

    yield put(ZabbixesActions.storeZabbixSuccess(data));
    yield put(ZabbixesActions.closeZabbixModal());
  } catch (err) {
    yield put(
      ToastrActions.add({
        type: 'error',
        title: 'Falha ao criar Zabbix',
        message: 'Verifique as informações e tente novamente',
      }),
    );
  }
}
