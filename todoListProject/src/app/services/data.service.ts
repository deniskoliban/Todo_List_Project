import { Injectable } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any[] = [];
  newTask: any = null;

  constructor() { }



  getData() {
    this.newTask = prompt('Add new task', '');
    if ( this.newTask !== null ) {
      this.data.push(this.newTask);
    } 
    console.log(this.data)
    return this.data;
  }
}
