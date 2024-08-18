import {SET_ROLE} from '../types';

export const setUserRole = role => {
  return {
    type: SET_ROLE,
    payload: role,
  };
};
