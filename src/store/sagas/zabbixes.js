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
  zbx_name, zbx_url, zbx_user, zbx_pass,
}) {
  try {
    const { data } = yield call([api, 'STOREZABBIX'], {
      zbx_name,
      zbx_url,
      zbx_user,
      zbx_pass,
    });

    yield put(ZabbixesActions.storeZabbixSuccess(data));
    yield put(ZabbixesActions.closeZabbixModal());
  } catch (err) {
    console.log(err);
    yield put(
      ToastrActions.add({
        type: 'error',
        title: 'Falha ao criar Zabbix',
        message: 'Verifique as informações e tente novamente',
      }),
    );
  }
}
