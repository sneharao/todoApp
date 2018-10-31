import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[todoFocus]'
})
export class FocusDirective {

  @Input() todoFocus: boolean;

  constructor(private inputRef: ElementRef) {
    // console.log("Inside Focus Directive",inputRef,this.todoFocus);

  }
  @HostListener('mouseenter') onMouseEnter() {
    // console.log("Focus value",this.todoFocus);
    if (this.todoFocus) {
      this.inputRef.nativeElement.focus();
    }
  }
  @HostListener('mouseleave') onMouseeave() {
    // console.log("Focus value",this.todoFocus);
  }

}
