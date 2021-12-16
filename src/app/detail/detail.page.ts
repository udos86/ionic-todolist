import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    const todoId = this.route.snapshot.paramMap.get('id');
    this.todo = this.todosService.getTodoById(todoId);
  }
}


