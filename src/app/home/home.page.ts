import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Ionic Demo';
  todo: string = '';
  todos: Todo[] = this.todosService.getTodos();

  constructor(private todosService: TodosService) {}

  addTodo(): void {
    if (this.todo.length > 0) {
      this.todosService.addTodo({id: crypto.randomUUID(), text: this.todo});
      this.todo = '';
    }
  }
}
