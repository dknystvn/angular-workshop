import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EMPTY, Observable, first, map, take, tap } from 'rxjs';
import { InventoryItem } from 'src/app/models/inventory-item.types';
import { InventoryService } from 'src/app/services/inventory.service';

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

  public ngOnInit() {
    if (this.itemId) {
      this._item = this.inventory.findBy(this.itemId);
    }
  }
}

