import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  constructor(private _taskServices: TaskService) { }

  formTask = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  addTask = () => {
    this._taskServices.addTask({
      title: this.formTask.value.title || '',
      description: this.formTask.value.description || '',
      hide: true
    });

    this.formTask.reset();
  }
}
