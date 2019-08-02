import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.getData());
    console.log(this.dataService.data)
  }

}
