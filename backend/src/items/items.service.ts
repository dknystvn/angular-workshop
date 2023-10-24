import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item) {
    this.items.push(item);
  }

  update(id: string, updatedItem: Partial<Item>) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    Object.assign(this.items[itemIndex], updatedItem);
    return this.items[itemIndex];
  }

  delete(id: string) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    this.items.splice(itemIndex, 1);
  }
}
