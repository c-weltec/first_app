import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../actions/actionType";

const initialState = {
  users: [],
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_USERS_REQUEST:
      return Object.assign({}, { ...state, loading: true });
    case GET_USERS_SUCCESS:
      return Object.assign({}, { ...state, loading: false, users: payload });
    case GET_USERS_FAILED:
      return Object.assign({}, { ...state, loading: false });
    default:
      return state;
  }
};
