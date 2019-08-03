import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() data: any;

  tasks: any[] = [];
  inProgress: any[] = [];

  constructor(private dataService: DataService) { }

  addToData() {
    this.dataService.getData();
    if ( this.dataService.newTask !== null ) {
      this.tasks.push(this.dataService.newTask);
    }  
    
  }

  changeTaskCondition(taskCondition){
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] == taskCondition.task && taskCondition.condition == 'delete') {
        this.tasks.splice(i, 1);
      }else {
        this.tasks.splice(i, 1);
        this.inProgress.push(taskCondition.task)
      }
    }
    console.log(this.tasks );
    console.log(this.inProgress );

  }


  ngOnInit() {
    
  }

}
