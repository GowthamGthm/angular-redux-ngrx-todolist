import {Component} from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {Todo} from "./model/Todo.model";
import * as TodoActions from "./todo-store/todo-actions";
import * as TodoSelectors from "./todo-store/todo-selector";
import {AppState} from "./todo-store/AppState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngrx-example';
  todo: string = "";
  todoList$: Observable<Todo[]>;
  error$: Observable<string | undefined>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(TodoActions.loadAllTodos());
    this.todoList$ = this.store.select(TodoSelectors.getAllTodoList);
    this.error$ = this.store.select(TodoSelectors.getTodoError);
  }


  todoAdded() {
    if (this.todo !== null && this.todo !== undefined && this.todo !== "") {
      let id$ = this.store.select(TodoSelectors.lengthOfTasks);
      id$.subscribe(val => {
        let newTodo: Todo = {id: val, task: this.todo};
        this.store.dispatch(TodoActions.addTodo({todo: newTodo}));
      }).unsubscribe();
      console.log(this.todo);
      // clear todo
      this.todo = "";
    }
  }

  todoDelete(item: Todo) {
    this.store.dispatch(TodoActions.deleteTodo({todo: item}));
  }

}
