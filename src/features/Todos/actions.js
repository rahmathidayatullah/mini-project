import {
  START_FETCHING_TODOS,
  ERROR_FETCHING_TODOS,
  SUCCESS_FETCHING_TODOS,
} from "./constants";

import { getData } from "utils/fetchData";

export const startFetchingTodos = () => {
  return {
    type: START_FETCHING_TODOS,
  };
};

export const errorFetchingTodos = () => {
  return {
    type: ERROR_FETCHING_TODOS,
  };
};
export const successFetchingTodos = ({ todos }) => {
  return {
    type: SUCCESS_FETCHING_TODOS,
    todos,
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetchingTodos());

      const res = await getData("todos");
      let data = [];
      for (let i = 0; i < res.data.length; i++) {
        let items = await getData(`todos/${res.data[i].id}/items`);
        res.data[i].items = items.data;
        data.push(res.data[i]);
      }

      dispatch(successFetchingTodos({ todos: data }));
    } catch (err) {
      dispatch(errorFetchingTodos());
    }
  };
};
