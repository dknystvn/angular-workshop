import { Component, Input, OnInit } from '@angular/core';
import { InventoryItem } from './inventory-item.types';

@Component({
  selector: 'ui-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css'],
})
export class InventoryItemComponent implements OnInit {
  @Input()
  public item!: InventoryItem;

  public ngOnInit(): void {
    if (!this.item) throw new Error('Item is not defined.');
  }
}

