import { LOGIN_SUCCEEDED, LOGIN_FAILED, FETCH_USER } from './types';

export const initialState = {
  person: [],
  fetchPerson: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return { ...state, person: [...state.person, action.payload] };
    case LOGIN_FAILED:
      return 'The form was failed.';
    case FETCH_USER:
      return { ...state, fetchedPerson: action.payload };
    default:
      return state;
  }
};

export default formReducer;
