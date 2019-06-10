import { call, put } from 'redux-saga/effects';
import { actions as ToastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import API from '../../services/api';
import AuthActions from '../ducks/auth';

const api = API.create();

export function* signIn({ email, password }) {
  try {
    const { data } = yield call([api, 'SIGNIN'], { email, password });
    localStorage.setItem('@SaaS:token', data.token);

    yield put(AuthActions.signInSuccess(data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      ToastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail e/ou senha',
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@SaaS:token');
  localStorage.removeItem('@SaaS:zabbix');

  yield put(push('/signin'));
}
