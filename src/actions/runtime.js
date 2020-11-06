/* eslint-disable import/prefer-default-export */

import { ACTION_TYPES } from 'reducers/runtime';

export function setUserDetails({ name, value }) {
  return {
    type: ACTION_TYPES.setUserDetails,
    payload: {
      name,
      value,
    },
  };
}

export function setCurrentUser({ name, value }) {
  return {
    type: ACTION_TYPES.setCurrentUser,
    payload: {
      name,
      value,
    },
  };
}
