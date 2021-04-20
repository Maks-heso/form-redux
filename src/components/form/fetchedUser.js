import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/actions';

const FetchedUser = (users) => {
  const dispatch = useDispatch();
  if (!users.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchUser())}>
        Загрузить пользователей
      </button>
    );
  }
};

export default FetchedUser;
