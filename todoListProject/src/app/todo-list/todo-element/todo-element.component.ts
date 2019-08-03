import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() data: any;
  @Output() changeTaskCondition = new EventEmitter<object>();

  constructor() { }

  change(task:any, condition:any) {
    this.changeTaskCondition.emit({task: task, condition: condition});
    
}

  ngOnInit() {
  }

}
