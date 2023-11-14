import produce from 'immer';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  usersLogin: {
    // username: '60523206002-6',
    // password: '0000-00-00',
    // username: '60523206001-8',
    // password: '20200701',
    // username: 'pichit@rmutl.ac.th',
    // username: 'kwanchai@rmutl.ac.th',
    // username: 'john@rmutl.ac.th',
    // password: '10101',
    remember: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action = {}) => produce(state, (draft) => {
    switch (action.type) {
      case INIT:
        draft.usersLogin = state;
        break;
      default:
        break;
    }
  });

export default loginReducer;
