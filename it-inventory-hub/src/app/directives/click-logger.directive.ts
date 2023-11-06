import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
})
export class ClickLoggerDirective {
  public constructor(private readonly element: ElementRef) {}

  @HostListener('click')
  public onClick(): void {
    console.log('Element was clicked!');
    console.log(this.element.nativeElement);
  }
}
