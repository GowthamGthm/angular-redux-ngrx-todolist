import {createSelector} from "@ngrx/store";
import {Todo} from "../model/Todo.model";
import {AppState} from "./AppState";


export interface TodoState {
  todoList: Todo[],
  error: string | undefined
}

export const selectAllTodoList = (state: AppState) => state.todo;

export const getAllTodoList = createSelector(
  selectAllTodoList,
  (state: TodoState) => {
    return state?.todoList;
  }
);

export const getTodoError = createSelector(
  selectAllTodoList,
  (state: TodoState) => {
    return state.error;
  }
);

export const lengthOfTasks = createSelector(
  selectAllTodoList,
  (state: TodoState) => {
    return state.todoList?.length + 1 || 0;
  }
);
