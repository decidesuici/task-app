import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  constructor(private _taskServices: TaskService) { }

  ngOnInit(): void {
    this.tasks = this._taskServices.getTasks();
  }
}
