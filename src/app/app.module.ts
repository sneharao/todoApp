import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { EscapeDirective } from './escape.directive';
import { FocusDirective } from './focus.directive';
import { FilterPipe } from './filter.pipe';
import { ListComponent } from './list/list.component';
import { TodoDataService } from './todo-data.service';

const routes:Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    EscapeDirective,
    FocusDirective,
    FilterPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
