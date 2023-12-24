import {toast} from 'react-toastify';
import {call, put} from 'redux-saga/effects';

export function* handleErrorInSagas(action, message) {
  yield call(toast.error, message || 'Something went wrong.', {
    autoClose: 2000,
  });
  yield put(action());
}
