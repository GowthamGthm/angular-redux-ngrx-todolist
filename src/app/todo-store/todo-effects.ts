import {Injectable} from "@angular/core";
import {AppService} from "../app.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as TodoActions from "../todo-store/todo-actions";
import {mergeMap, of} from "rxjs";
import {catchError, map} from "rxjs/operators";


@Injectable({providedIn: "root"})
export class TodoEffects {

  constructor(private appService: AppService, private actions$: Actions) {
  }


  loadAllTodosFromServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAllTodos),
      mergeMap(() => this.appService.getTodoList().pipe(
        map(data => TodoActions.loadAllTodosSuccess({todo: data})),
        catchError((error : Error) => of(TodoActions.loadAllTodosFailure({error : error.message})))
      )
      )
    )
  );

  addANewTodo = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap((action) => this.appService.addTodoList(action.todo).pipe(
          map(data => TodoActions.loadAllTodosSuccess({todo: data})),
          catchError(error => of(TodoActions.loadAllTodosFailure({error : "Error Adding to Todo List"})))
        )
      )
    )
  );

  deleteATodo = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap((action) => this.appService.deleteItem(action.todo).pipe(
          map(data => TodoActions.loadAllTodosSuccess({todo: data})),
          catchError(error => of(TodoActions.loadAllTodosFailure({error : "Error Deleting the Todo List"})))
        )
      )
    )
  );

}
