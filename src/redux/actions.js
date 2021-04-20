import { LOGIN_SUCCEEDED, LOGIN_FAILED, FETCH_USER } from './types';

export function loginSucceeded(user) {
  return {
    type: LOGIN_SUCCEEDED,
    payload: user,
  };
}

export function loginFailed(user) {
  return {
    type: LOGIN_FAILED,
    payload: user,
  };
}

export function fetchUser() {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=5'
    );
    const json = await response.json();
    dispatch({ type: FETCH_USER, payload: json });
  };
}
