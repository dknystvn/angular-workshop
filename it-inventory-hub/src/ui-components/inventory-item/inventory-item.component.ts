import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { InventoryItem } from './inventory-item.types';

@Component({
  selector: 'ui-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css'],
})
export class InventoryItemComponent implements OnInit {
  @Input()
  public item!: InventoryItem;

  @Output()
  public delete = new EventEmitter<string>();

  public ngOnInit(): void {
    if (!this.item) throw new Error('Item is not defined.');
  }

  public onDelete() {
    this.delete.emit(this.item.id);
  }
}

