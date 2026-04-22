import { Component, inject, signal } from '@angular/core';
import { TaskManegmentService } from '../../services/task-manegment/task-manegment.service';
import { CommonModule } from '@angular/common';
import { TaskRow } from '../task-row/task-row';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddTask } from '../add-task/add-task';
import { ActivityCard } from '../activity-card/activity-card';


@Component({
  selector: 'app-task-board',
  imports: [CommonModule, TaskRow, ReactiveFormsModule, ActivityCard],
  templateUrl: './task-board.html',
  styleUrl: './task-board.scss',
})
export class TaskBoard {
public  taskManegmentService = inject(TaskManegmentService);
public  dialog = inject(MatDialog);


public searchControl = new FormControl('')

ngOnInit(){
  this.onSearch()
}

public onSearch() {
    this.searchControl.valueChanges.
    pipe(debounceTime(500),distinctUntilChanged()).
    subscribe((searchText)=> {
      if(searchText) this.taskManegmentService.search(searchText)
      }
    )
  }

public addTask() {
  this.dialog.open(AddTask, {
      width: '600px',
      height:'500px'
    });
  }
}
