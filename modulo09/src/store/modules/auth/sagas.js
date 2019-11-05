import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import SignUp from '~/pages/SignUp';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    //console.tron.log(user);
    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/ISGN_UP_REQUEST', signUp),
]);
