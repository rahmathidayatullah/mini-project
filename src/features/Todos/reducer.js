import {
  START_FETCHING_TODOS,
  SUCCESS_FETCHING_TODOS,
  ERROR_FETCHING_TODOS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TODOS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_TODOS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_TODOS:
      return { ...state, status: statuslist.success, data: action.todos };

    default:
      return state;
  }
}
