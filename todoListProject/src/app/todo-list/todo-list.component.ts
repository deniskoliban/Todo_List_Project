import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChangeTaskCondition } from './change-task-condition';
import { Task } from '../services/task-status';
import { Status } from '../services/status-task-enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  toDoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.changePositionByStatus();

  }

  changePositionByStatus() {
    this.dataService.data.subscribe(tasks => {
      this.toDoTasks = [];
      this.inProgressTasks = [];
      this.doneTasks = [];
      tasks.forEach(item => {
        if (item.status === Status.TODO) {
          this.toDoTasks.push(item);
        } else if (item.status === Status.IN_PROGRESS) {
          this.inProgressTasks.push(item);
        } else if (item.status === Status.DONE) {
          this.doneTasks.push(item);
        } 
      })
    } )
  }


  addNewTask() {
    this.dataService.addTask();
  }


  

  changeTaskCondition(taskCondition: ChangeTaskCondition){
   

  }

  


  

}
