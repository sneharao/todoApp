import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'; 

import { AppComponent } from './components/app/app.component';
import { EscapeDirective } from './directives/escape/escape.directive';
import { FocusDirective } from './directives/focus/focus.directive';
import { FilterPipe } from './filters/filter.pipe';
import { ListComponent } from './components/list/list.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
