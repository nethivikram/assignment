export const ACTION_TYPES = {
  setUserDetails: 'setUserDetails',
  setCurrentUser: 'setCurrentUser',
};

export const DEFAULT_STATE = {
  registeredUsers: {},
  currentUser: null,
};

export default function runtime(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.setUserDetails: {
      const users = state.registeredUsers;
      users[action.payload.value.email] = action.payload.value;
      return {
        ...state,
        [action.payload.name]: users,
      };
    }
    case ACTION_TYPES.setCurrentUser:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
