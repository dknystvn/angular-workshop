import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ButtonEmphasis } from './button.types';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public emphasis!: ButtonEmphasis;

  @Output()
  public pushed = new EventEmitter<void>();

  public ngOnInit(): void {
    if (!this.emphasis) throw new Error('Emphasis was not defined');
  }

  public onClick(): void {
    this.pushed.emit();
  }
}

