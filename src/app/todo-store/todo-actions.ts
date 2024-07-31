import {createAction, props} from "@ngrx/store";
import {Todo} from "../model/Todo.model";


export const  loadAllTodos = createAction(
  "[App Page] Load all Todos"
);

export const  loadAllTodosSuccess =  createAction(
  "[App Page] Load all Todos Success",
  props< { todo: Todo[] } >()
);

export const  loadAllTodosFailure =  createAction(
  "[App Page] Load all Todos Failure",
  props< { error: string } >()
);

export const  deleteTodo =  createAction(
  "[App Page] Delete a Todo Item",
  props< { todo: Todo }>()
);

export const addTodo = createAction(
  "[ App Page] Add a TODO",
  props< { todo : Todo }>()
);


