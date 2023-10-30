import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ButtonType } from './button.types';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  public label?: string;

  @Input()
  public type: ButtonType = 'info';

  @Output()
  public onTriggered = new EventEmitter<boolean>();

  public onClick(): void {
    this.onTriggered.emit(true);
  }
}

