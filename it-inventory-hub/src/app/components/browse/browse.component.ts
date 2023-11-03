import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item.types';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  private _selectedItemIdState = new BehaviorSubject<string | undefined>(undefined);

  private _allItems: Observable<ReadonlyArray<InventoryItem>> = EMPTY;
  private _selectedItemId: Observable<string | undefined> = EMPTY;

  public get allItems(): Observable<ReadonlyArray<InventoryItem>> {
    return this._allItems;
  }

  public get selectedItemId(): Observable<string | undefined> {
    return this._selectedItemId;
  }

  public constructor(private readonly inventory: InventoryService) {}

  public ngOnInit(): void {
    this.loadItems();
    this._selectedItemId = this._selectedItemIdState.asObservable();
  }

  public isItemSelected(itemId: string): boolean {
    return this._selectedItemIdState.getValue() === itemId;
  }

  public onSelect(itemId: string): void {
    this._selectedItemIdState.next(itemId);
  }

  public onDelete(itemId: string): void {
    const deleteForSure = confirm('Are you sure you want to delete this item?');

    if (deleteForSure) {
      this.inventory.remove(itemId).subscribe({
        complete: () => {
          this.loadItems();
        },
        error: console.log,
      });
    }
  }

  private loadItems(): void {
    this._allItems = this.inventory.findAll();
  }
}
