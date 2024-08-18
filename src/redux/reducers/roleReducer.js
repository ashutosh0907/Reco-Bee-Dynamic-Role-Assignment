import {SET_ROLE} from '../types';

export default function (state = false, action) {
  // console.log(action.payload);
  switch (action.type) {
    case SET_ROLE:
      return action.payload;
    default:
      return state;
  }
}
