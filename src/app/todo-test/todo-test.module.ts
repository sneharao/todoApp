import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ListComponent } from '../components/list/list.component';
import { FilterPipe } from '../filters/filter.pipe';
import { FocusDirective } from '../directives/focus/focus.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FilterPipe,FocusDirective],
  exports:[ CommonModule,
    FormsModule,FilterPipe, FocusDirective]
})
export class TodoTestModule { }
