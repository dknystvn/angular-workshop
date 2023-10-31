import { Pipe, PipeTransform } from '@angular/core';
import { InventoryItemType } from 'src/app/models/inventory-item.types';

@Pipe({
  name: 'toInventoryTypeIcon',
})
export class NamePipe implements PipeTransform {
  public transform(type: InventoryItemType): string {
    switch (type) {
      case 'screen':
        return 'display';
      case 'laptop':
        return 'laptop';
      case 'headphones':
        return 'headset';
      default:
        return 'question-square';
    }
  }
}
