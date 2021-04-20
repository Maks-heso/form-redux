import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_USER } from './types';

export function* sagaWatcher() {
  yield takeEvery(fetchUser, sagaWorker());
}

function* sagaWorker() {
  yield put();
  const payload = yield call(fetchUser);
  yield put({ type: FETCH_USER, payload });
}

async function fetchUser() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=5'
  );
  return await response.json();
}
