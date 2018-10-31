import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[todoEscape]',
})
export class EscapeDirective {
  @Output() todoEscape = new EventEmitter();

  constructor(private elRef: ElementRef) {

  }

  @HostListener('keydown.escape') onkeyEscapePress() {
    this.todoEscape.emit('escape key pressed');
  }

}
