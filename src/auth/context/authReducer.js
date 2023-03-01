import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    // [Auth] Login
    case types.login:
      return {
        ...state,
        logged: true,
        userInfo: action.payload,
      };
    // [Auth] Logout
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
