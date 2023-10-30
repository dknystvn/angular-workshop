import { Component, Input } from '@angular/core';
import { DropDownItem } from './dropdown.types';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input()
  public value?: string;

  @Input()
  public options?: ReadonlyArray<DropDownItem<string | number>>;
}

