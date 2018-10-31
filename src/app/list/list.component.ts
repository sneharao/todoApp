import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { TrackCompletedService } from '../track-completed.service';


@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todoList: Todo[];
  @Input() status: string;
  public originalTodo: Todo;
  public saveEvent: string;
  public itemCount;

  constructor(private todoService: TodoDataService, private completedTodoService:TrackCompletedService) { }

  ngOnInit() {
    this.todoService.itemsLeftCount.subscribe(count => this.itemCount = count);

  }

  removeTodo(value,index) {
    if (value.id) {
      this.todoService.deleteTask(value.id).then(res => {
        this.todoList.splice(index, 1);
        this.completedTodoService.removeFromCompletedTodos(index,this.todoList,false);
        this.todoService.changeCountValue(this.todoService.returnActiveItemsCount(this.todoList));
        this.completedTodoService.assignColorCodes(this.todoList);
      }, error => { });
    }
  }

  editTodo(value) {
    this.originalTodo = Object.assign({}, value);
    value.isEditing = true;

  }

  saveEdits(task, event) {

    if (task.todoName == "" || task == undefined || task == null) {
      return;
    }

    if (event === "blur" || this.saveEvent === "submit") {
      this.saveEvent = null;
      return;
    }

    this.saveEvent = event;

    if (this.originalTodo.todoName === task.todoName) {
      task.isEditing = false;
      console.log("Both have same value");
      return;
    }

    else {
      this.todoService.updateTask(task).then(res => {
        task.isEditing = false;
      }, error => {
        task = this.originalTodo;
        task.isEditing = false;
      })
    }
  }

  revertEdits = function (taskIndex) {
    this.todoList[taskIndex] = this.originalTodo;
    this.originalTodo = null;
  }

  toggleCompleted(todo,index) {

    if (todo.isComplete) {
      todo.completedDate = new Date();
      this.completedTodoService.addToCompletedTodos(index);
    }
    else {
      todo.completedDate = null;
      this.completedTodoService.removeFromCompletedTodos(index,this.todoList,true);
    }

    this.completedTodoService.assignColorCodes(this.todoList);



    this.todoService.updateTask(todo).then(res => { }, error => { });
    this.todoService.changeCountValue(this.todoService.returnActiveItemsCount(this.todoList));
  }

    
  }


