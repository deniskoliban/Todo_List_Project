import { Injectable } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task-status';
import { Status } from './status-task-enum';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  
  constructor() { }

  isNullOrEmpty(testedData: string): boolean {
    if (testedData === null || testedData === '' ) {
      return false;
    } 
    return true;
  }

  addTask() {
    let newTaskValue = prompt('Add new task value', '');
    if ( this.isNullOrEmpty(newTaskValue)){
      const prevData = this.data.getValue(); 
      this.data.next([...prevData, {task:newTaskValue, status:Status.TODO, index: prevData.length }]);  
    }
    
  }

  changeTaskContent(task: Task) {
    const prevData = this.data.getValue();
    prevData[task.index] = task;
    this.data.next(prevData);
  }

  
}
