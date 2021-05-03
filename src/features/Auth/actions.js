import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { tour: null, token: null, access: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
      };

    case USER_LOGOUT:
      return { tour: null, token: null, access: null };

    default:
      return state;
  }
}
