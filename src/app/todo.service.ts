import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly todos: Todo[] = [
    { id: '1', text: 'Müll rausbringen'},
    { id: '2', text: 'Geschenke kaufen'},
    { id: '3', text: 'Urlaub machen'},   
  ];  

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
