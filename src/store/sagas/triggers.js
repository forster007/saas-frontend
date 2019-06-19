import { call, put } from 'redux-saga/effects';
import { actions as ToastrActions } from 'react-redux-toastr';

import API from '../../services/api';
import TriggersActions from '../ducks/triggers';

const api = API.create();

export function* getTriggers() {
  try {
    const { data } = yield call([api, 'TRIGGERS']);
    yield put(TriggersActions.getTriggersSuccess(data));
  } catch (err) {
    yield put(
      ToastrActions.add({
        type: 'error',
        title: 'Falha ao carregar Triggers',
        message: 'Verifique as informações e tente novamente',
      }),
    );
  }
}
