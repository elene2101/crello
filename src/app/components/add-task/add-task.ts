import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskManegmentService } from '../../services/task-manegment/task-manegment.service';


@Component({
  selector: 'app-add-task',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  public fb = inject(FormBuilder)
  public taskManegmentService = inject(TaskManegmentService);

  public taskForm= this.fb.nonNullable.group({
    title: '',
    description:'',
    status:'',
    priority: '',
  })

  constructor(public dialogRef: MatDialogRef<AddTask>) {}

public close(): void {
    this.dialogRef.close();
  }
  
public addTask(): void {
    const formRequest = {
      title: this.taskForm.value.title ?? '',
      description: this.taskForm.value.description ?? '',
      status: this.taskForm.value.status ?? 'todo',
      priority: this.taskForm.value.priority ?? 'low',
      createdAt: new Date(),
      id: this.taskManegmentService.tasks().length + 1 + ''
    } as any

    this.taskManegmentService.addTask(formRequest)
    this.close()
  }



}
