import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  public constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  @HostListener('mouseover')
  public onMouseOver(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout')
  public onMouseOut(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
}
