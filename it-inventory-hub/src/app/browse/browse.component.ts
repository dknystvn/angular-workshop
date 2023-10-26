import { Component } from '@angular/core';
import { InventoryItem } from '../domain/inventory-item.types';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent {
  public get items(): ReadonlyArray<InventoryItem> {
    return [
      {
        id: 'SC-01',
        name: 'Screen 01',
        type: 'screen',
      },
      {
        id: 'SC-02',
        name: 'Screen 02',
        type: 'screen',
      },
      {
        id: 'HP-01',
        name: 'Headphones 01',
        type: 'headphones',
      },
    ];
  }
}

