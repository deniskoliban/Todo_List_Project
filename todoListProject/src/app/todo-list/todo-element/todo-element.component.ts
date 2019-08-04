import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DELETE } from 'src/app/constants/constants';
import { ChangeTaskCondition } from '../change-task-condition';
import { Task, Status } from 'src/app/services/task-status';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {
  
  @Input() data: Task;
  @Output() changeTaskCondition = new EventEmitter<Task>();
  
  status = Status;

  constructor(private dataService: DataService) { 
    
  }

  change(status: Status) {
    this.data.status = status;
    this.dataService.changeTask(this.data);
    
  }

  

  ngOnInit() {
  }

}
