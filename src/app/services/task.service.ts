import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  constructor() {
    // this.tasks = [
    //   {
    //     title: 'Write',
    //     description: 'I have to write',
    //     hide: true
    //   },
    //   {
    //     title: 'Create website',
    //     description: 'I have to create website',
    //     hide: true
    //   }
    // ]
  }

  getTasks() {
    if (localStorage.getItem('tasks') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!);
    }
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    if (localStorage.getItem('tasks') == null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks')!);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task) {
    this.tasks.forEach((element, index) => {
      if (task == element) {
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    });
  }
}
