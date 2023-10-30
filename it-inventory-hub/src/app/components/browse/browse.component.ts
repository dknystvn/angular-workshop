import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item.types';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  private _allItems: Observable<ReadonlyArray<InventoryItem>> = EMPTY;

  public get allItems(): Observable<ReadonlyArray<InventoryItem>> {
    return this._allItems;
  }

  public constructor(private readonly inventory: InventoryService) {}

  public ngOnInit() {
    this.loadItems();
  }

  public onDelete(itemId: string) {
    this.inventory.remove(itemId).subscribe({
      complete: () => {
        this.loadItems();
      },
      error: console.log,
    });
  }

  private loadItems() {
    this._allItems = this.inventory.findAll();
  }
}
