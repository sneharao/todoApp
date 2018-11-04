import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TrackCompletedService {

  completedTaskList: number[];

  constructor() {
    this.getCompletedTodos();
  }

  getCompletedTodos() {
    this.completedTaskList = JSON.parse(localStorage.getItem('completed-todos')) || [];
  }

  setCompletedTodos() {
    localStorage.setItem('completed-todos', JSON.stringify(this.completedTaskList));
  }

  assignColorCodes(tasklist: Todo[]) {

    let length = this.completedTaskList.length;
    if (length > 0) {
      tasklist[this.completedTaskList[length - 1]].className = "last-item";
      if (length >= 2) {
        tasklist[this.completedTaskList[length - 2]].className = "second-last-item";
      }

      if (length >= 3) {
        tasklist[this.completedTaskList[length - 3]].className = "third-last-item";
      }

      if (length > 3) {
        for (let i = length - 4; i >= 0; i--) {
          tasklist[this.completedTaskList[i]].className = "normal-complete-item";
        }
      }
    }

  }
  resetColor(list: Todo[]) {
    list.forEach(task => { task.className = "default-color" });
  }

  addToCompletedTodos(index: number) {
    this.completedTaskList.push(index);
    this.setCompletedTodos();
  }

  removeFromCompletedTodos(index, tasklist: Todo[], resetColor: boolean) {
    let indexOfItem = this.completedTaskList.indexOf(index);
    if (indexOfItem >= 0) {
      this.completedTaskList.splice(indexOfItem, 1);
      this.setCompletedTodos();
      this.resetIndexes(index);
      if (resetColor)
        tasklist[index].className = 'default-color';
    }
  }

  resetIndexes(value: number) {
    for (let i = 0; i < this.completedTaskList.length; i++) {
      if (this.completedTaskList[i] > value) {
        this.completedTaskList[i] = this.completedTaskList[i] - 1;
      }
    }

    this.setCompletedTodos();
  }

  clearCompletedTodos() {
    this.completedTaskList = [];
    this.setCompletedTodos();
  }

}
