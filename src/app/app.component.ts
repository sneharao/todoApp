import { Component ,OnInit , Output, EventEmitter} from '@angular/core';

import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';
import { TrackCompletedService } from './track-completed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Todoapp';
  public todoList=[];
  public status :string = 'all';
  public newTodo: string = "";
  public saveEvent:any; 
  public reverted:boolean;
  public isEditing:boolean;
  public itemsLeftCount:number;

  constructor(private todoService:TodoDataService,private completedService:TrackCompletedService) {
    this.initializeValues();
  }

  ngOnInit() {
     this.todoService.itemsLeftCount.subscribe(count=> this.itemsLeftCount = count);
  }

  addTodo(value) {
    if(value.newTodo == "" ||  value == undefined || value == null){
      return;
     }
   
       this.todoService.addTask(new Todo(value.newTodo,false,false))
       .then(result =>
        {
          if(result.value) {
            this.todoList.push(new Todo(result.value.todoName,
              result.value.isComplete,false,
              "added-recently", 
              result.value.createdDate,
              result.value.completedDate,
            ));

          }
          
          this.initializeValues(false);
        },error=>
        { console.log("error",error);
        });
    
     this.newTodo = "";
     

  }

  setStatus(value:string) {
    this.status = value;
  }

  clearCompletedTodos() {
    let completedTaskList = this.todoList.filter(query=>{
      if(query.isComplete == true){
        return query;
      }
    });
    this.todoService.deleteAllCompletedTasks(completedTaskList);
    this.completedService.clearCompletedTodos();
    this.initializeValues();
  }

  initializeValues(isUpdateList?:boolean) {
    this.todoService.createDbStore().then(query=>{
      this.todoService.getAllTasks().then(res=>{

        this.todoList = res;
        this.itemsLeftCount = this.todoService.returnActiveItemsCount(res); 

         if(isUpdateList != null) {
           this.todoList[this.todoList.length - 1].className = "added-recently";
         }
         this.completedService.assignColorCodes(this.todoList);
      })
    });
  }


}
