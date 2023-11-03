import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { InventoryItem } from '../../../models/inventory-item.types';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPreviewComponent implements OnInit, OnChanges {
  private _item: Observable<InventoryItem> = EMPTY;

  @Input()
  public itemId?: string;

  public get item(): Observable<InventoryItem> {
    return this._item;
  }

  public constructor(private readonly inventory: InventoryService) {}

  public ngOnChanges(): void {
    if (this.itemId) {
      this._item = this.inventory.findBy(this.itemId);
    }
  }

  public ngOnInit(): void {
    if (this.itemId) {
      this._item = this.inventory.findBy(this.itemId);
    }
  }
}

