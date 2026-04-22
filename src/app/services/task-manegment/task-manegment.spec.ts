import { TestBed } from '@angular/core/testing';

import { TaskManegmentService } from './task-manegment.service';

describe('TaskManegment', () => {
  let service: TaskManegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
