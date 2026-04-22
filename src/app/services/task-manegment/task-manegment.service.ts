import { computed, Injectable, signal } from '@angular/core';
import { INITIAL_TASKS, Task } from '../../shared/tasks.mock';

@Injectable({
  providedIn: 'root',
})
export class TaskManegmentService {
  public tasks = signal<Task[]>(INITIAL_TASKS);
  public activity = signal<{type:string, date:Date,taskId:string}[]>([]);


  public  todo = computed(() => this.tasks().filter(task => task.status === 'todo'));
  public  inProgress = computed(() => this.tasks().filter(task => task.status === 'inprogress'));
  public  done = computed(() => this.tasks().filter(task => task.status === 'done'));


  public addTask(task: Task) {
    this.tasks.update(prev => [...prev, task]);
    this.activity.update(prev => [...prev, {type:'addTask', taskId: task.id ,date:new Date()}])
  }

  public updateStatus(taskId: string, status: Task['status']) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === taskId ? { ...t, status } : t)
    );
    this.activity.update(prev => [...prev, {type:'updateStatus', taskId: taskId, date:new Date()}])
  }

  public search(searchText: string) {
    this.tasks.set(this.tasks().filter(t =>
      t.title.toLowerCase().includes(searchText.toLowerCase())
    ))
  }

}


