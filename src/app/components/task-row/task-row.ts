import { Component, inject, input } from '@angular/core';
import { Task } from '../../shared/tasks.mock';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { TaskManegmentService } from '../../services/task-manegment/task-manegment.service';

@Component({
  selector: 'app-task-row',
  imports: [
    DatePipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule],
  templateUrl: './task-row.html',
  styleUrl: './task-row.scss',
})
export class TaskRow {
  public title = input.required<string>()
  public tasksList = input.required<Task[]>()

  public statusControl = new FormControl();
  public taskManegmentService = inject(TaskManegmentService);


onSelectionChange(event: MatSelectChange, id:string) {
  this.taskManegmentService.updateStatus(id, event.value)
}

}
