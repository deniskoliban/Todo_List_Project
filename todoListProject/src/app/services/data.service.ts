import { Injectable } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

import { Task, Status } from './task-status';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  
  constructor() { }
// TODO: Инвертировать метод чтобы в названии небыло NOT
  isNotNullOrEmpty(testedData: string): boolean {
    if (testedData !== null && testedData !== '' ) {
      return true;
    } 
    return false;
  }

  addTask() {
    let newTaskValue = prompt('Add new task value', '');
    if ( this.isNotNullOrEmpty(newTaskValue)){
      const prevData = this.data.getValue(); 
      this.data.next([...prevData, {task:newTaskValue, status:Status.TODO, index: prevData.length }]);  
    }

  }

  changeTask(task: Task) {
    const prevData = this.data.getValue();
    prevData[task.index] = task;
    this.data.next(prevData);


  }

  getData() {
    
    return this.data;
  }
}
