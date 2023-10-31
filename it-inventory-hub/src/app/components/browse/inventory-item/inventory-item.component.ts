import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { InventoryItem } from '../../../models/inventory-item.types';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css'],
})
export class InventoryItemComponent implements OnInit {
  @Input()
  public item!: InventoryItem;

  @Input()
  @HostBinding('class.selected')
  public isSelected = false;

  @Output()
  public delete = new EventEmitter<string>();

  @Output()
  public itemSelect = new EventEmitter<string>();

  public ngOnInit(): void {
    if (!this.item) throw new Error('Item is not defined.');
  }

  public onDelete() {
    this.delete.emit(this.item.id);
  }

  @HostListener('click')
  public onSelect() {
    this.itemSelect.emit(this.item.id);
  }
}

