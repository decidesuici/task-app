import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private _taskService: TaskService) { }

  @Input() task: Task = {
    title: '',
    description: '',
    hide: true
  };

  deleteTask(task: Task) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete this task?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: 'hsl(171, 100%, 41%)',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Task Deleted!',
          confirmButtonColor: 'hsl(171, 100%, 41%)',
        });
        this._taskService.deleteTask(task);
      }
    });
  }
}
