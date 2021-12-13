import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Hi Ionic';
  todo: string;
  todos: string[] = [];  

  constructor() {}

  addTodo() {
    if (this.todo.length > 0) {
      this.todos.push(this.todo);
      this.todo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
