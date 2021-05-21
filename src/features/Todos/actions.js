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

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetchingTodos());
      // get all data todos
      const res = await getData("todos");
      // var data todos and items
      let data = [];
      // get data items todo and push to var data
      for (let i = 0; i < res.data.length; i++) {
        let items = await getData(`todos/${res.data[i].id}/items`);

        // add items value in todos array
        res.data[i].items = items.data;

        // push data to data array
        data.push(res.data[i]);
      }

      dispatch(successFetchingTodos({ todos: data }));
    } catch (err) {
      dispatch(errorFetchingTodos());
    }
  };
};

export const successFetchingTodos = ({ todos }) => {
  return {
    type: SUCCESS_FETCHING_TODOS,
    todos,
  };
};

export const errorFetchingTodos = () => {
  return {
    type: ERROR_FETCHING_TODOS,
  };
};
