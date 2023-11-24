import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonItem, IonInput, IonLabel, IonList, IonRouterLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonRouterLink, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  private readonly todoService = inject(TodoService);

  title = 'Ionic Demo'
  todo: string = '';
  todos: Todo[] = this.todoService.getTodos();

  addTodo(): void {
    if (this.todo.length > 0) {
      this.todoService.addTodo({ id: crypto.randomUUID(), text: this.todo });
      this.todo = '';
    }
  }
}
