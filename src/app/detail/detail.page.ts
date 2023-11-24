import { Component, Input, OnInit, inject } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class DetailPage implements OnInit {
  // private readonly route = inject(ActivatedRoute);
  private readonly todoService = inject(TodoService);

  @Input('id') todoId: string | undefined;

  todo: Todo | undefined;

  ngOnInit() {
    // const todoId = this.route.snapshot.paramMap.get('id');
    if (typeof this.todoId === 'string') {
      this.todo = this.todoService.getTodoById(this.todoId);
    }
  }

}
