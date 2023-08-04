import produce from 'immer';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  usersLogin: {
    // username: '60523206001-8',
    // password: '20280704',
    username: 'pichit@rmutl.ac.th',
    password: '10101',
    remember: false
  }
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action = {}) => produce(state, draft => {
  switch (action.type) {
    case INIT:
      draft.userLogin = state;
      break;
    default:
      break;
  }
});

export default loginReducer;
