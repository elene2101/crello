import { Component, inject } from '@angular/core';
import { TaskManegmentService } from '../../services/task-manegment/task-manegment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-activity-card',
  imports: [DatePipe],
  templateUrl: './activity-card.html',
  styleUrl: './activity-card.scss',
})
export class ActivityCard {
  public taskManegmentService = inject(TaskManegmentService);

  public findTaskName(taskId: string) {
    const task = this.taskManegmentService.tasks().find(task => task.id === taskId);
    return task?.title || 'Unknown task';
  }

}
