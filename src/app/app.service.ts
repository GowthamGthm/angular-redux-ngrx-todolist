import { Injectable} from "@angular/core";
import {delay, Observable, of, throwError} from "rxjs";
import {Todo} from "./model/Todo.model";


@Injectable( {providedIn : "root"} )
export  class AppService {

    todoList : Todo[] = [];

    constructor() {
      this.todoList = [
        {id : 1 , task: "ABCD"},
        {id : 2 , task: "DEFG"},
        {id : 3 , task: "HIJK"},
        {id : 4 , task: "LMNO"},
        {id : 5 , task: "PQRS"},
        {id : 6 , task: "TUVW"},
        {id : 7 , task: "XYZ"},
        {id : 8 , task: "1234"},
        {id : 9 , task: "5678"},
        {id : 10 , task: "91011"},
      ];
    }

    public getTodoList(): Observable<Todo[]> {
       return of(this.todoList).pipe(delay(1000));
       // return throwError(new Error("Failed To Load TodoList, API call failed"));
    }

    public addTodoList(todo : Todo) : Observable<Todo[]>  {
      this.todoList = [...this.todoList, todo];
      return of(this.todoList).pipe(delay(1000));
    }


  deleteItem(item: Todo): Observable<Todo[]>  {
      this.todoList = this.todoList.filter(ele => ele.id !== item.id);
      return of(this.todoList).pipe(delay(1000));
  }


}
