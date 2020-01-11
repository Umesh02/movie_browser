import { Directive, ElementRef, AfterViewChecked } from "@angular/core";

@Directive({
  selector: "[appAutofocus]"
})
export class AutofocusDirective implements AfterViewChecked {
  constructor(private elem: ElementRef) {}
  ngAfterViewChecked(): void {
    this.elem.nativeElement.focus();
  }
}
