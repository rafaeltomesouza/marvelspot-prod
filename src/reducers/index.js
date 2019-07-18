import { combineReducers } from  'redux';

import {
  LOGIN,
  LOGOUT,
  POST_GET
} from '../actions';

function info(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT:
      return {}
    default:
      return state;
  }
}

function post(state = {}, action) {
  switch (action.type) {
    case POST_GET:
      return {
        ...action.value.val()
      }
    default:
      return state;
  }
}

export default combineReducers({
  info,
  post
});
