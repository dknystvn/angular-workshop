import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  public options?: ReadonlyArray<DropDownItem>;

  @Output()
  public selectionChanged = new EventEmitter<DropDownItem>();

  public onSelectionChanged(event?: Event): void {
    const selectedValue = (event?.target as HTMLSelectElement).value;

    if ((event?.target as HTMLSelectElement).value) {
      this.selectionChanged.emit(this.options?.find((option) => option.value === selectedValue));
    }
  }
}

