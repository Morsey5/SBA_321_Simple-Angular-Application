import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}