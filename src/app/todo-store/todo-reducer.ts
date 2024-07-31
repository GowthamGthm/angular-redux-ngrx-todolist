import {TodoState} from "./todo-selector";
import {createReducer, on} from "@ngrx/store";
import * as TodoActions from "./todo-actions";


export const initialState : TodoState = {
  todoList : [],
  error: undefined
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo , (store,result) => {
    return {
      ...store,
    }
  }),
  on(TodoActions.deleteTodo , (store,result) => {
    return {
      ...store,
    }
  }),
  on(TodoActions.loadAllTodos , (store,result) => {
    return {
      ...store,
    }
  }),
  on(TodoActions.loadAllTodosSuccess , (store,result) => {
    return {
      ...store,
      todoList: result.todo
    }
  }),
  on(TodoActions.loadAllTodosFailure , (store,result) => {
  return {
    ...store,
    error : result.error
  }
  })
);
