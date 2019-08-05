import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/services/task-status';
import { DataService } from 'src/app/services/data.service';
import { Status } from 'src/app/services/status-task-enum';


@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {
  
  @Input() data: Task;
 
  
  status = Status;

  constructor(private dataService: DataService) { 
    
  }

  changeStatus(status: Status) {
    this.data.status = status;
    this.dataService.changeTaskContent(this.data);
    
  }

  editTask(taskInfo: Task) {
    var editTaskValue = prompt("Edit this task", taskInfo.task);
    this.data.task = editTaskValue;
    this.dataService.changeTaskContent(this.data);
  
  }

  

  ngOnInit() {
  }

}
