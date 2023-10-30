import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input()
  public placeholder?: string;

  @Input()
  public value?: string;

  public constructor() {}
}

