import { Injectable } from '@angular/core';
import { AngularIndexedDB } from 'angular2-indexeddb';
import { BehaviorSubject } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoDb: AngularIndexedDB = new AngularIndexedDB('myTodo', 1);
  private countDataSource = new BehaviorSubject(0);
  itemsLeftCount = this.countDataSource.asObservable();

  constructor() {
    // this.initializeValue(); 
  }

  changeCountValue(count: number) {
    this.countDataSource.next(count);
  }

  returnActiveItemsCount(completeList: Todo[]) {
    return completeList.filter(item => {
      if (!item.isComplete)
        return item;
    }).length;

  }

  createDbStore() {
    return this.todoDb.openDatabase(1, (evt) => {
      let objectStore = evt.currentTarget.result.createObjectStore(
        'todo', { keyPath: "id", autoIncrement: true });

      objectStore.createIndex("todoName", "todoName", { unique: false });
      objectStore.createIndex("isComplete", "isComplete", { unique: false });
      objectStore.createIndex("createdDate", "createdDate", { unique: false });
      objectStore.createIndex("completedDate", "completedDate", { unique: false });

      return objectStore;
    });
  }

  getAllTasks() {
    return this.todoDb.getAll('todo').then((tasks) => {
      //console.log(tasks);
      return tasks;
    }, (error) => {
      console.log(error);
      return error;
    })
  }

  addTask(newtodo) {
    return this.todoDb.add('todo', { todoName: newtodo.todoName, isComplete: newtodo.isComplete, createdDate: new Date(), completedDate: null }).then(res => {
      //console.log("Added successfully", res);
      return res;
    }, (error) => {
      console.log(error);
      return error;
    });
  }

  updateTask(todo) {
    return this.todoDb.update('todo', { todoName: todo.todoName, isComplete: todo.isComplete, id: todo.id, createdDate: todo.createdDate, completedDate: todo.completedDate }).then(() => {
      // console.log("Updated Successfully !");
    }, (error) => {
      console.log(error);
      return error;
    });
  }

  deleteTask(todoid) {
    return this.todoDb.delete('todo', todoid).then((res) => {
      // console.log("delete result", res);
      return res;
    }, (error) => {
      console.log(error);
      return error;
    });
  }

  deleteAllCompletedTasks(completedList) {
    completedList.forEach(task => {
      this.deleteTask(task.id);
    });

  }

}

