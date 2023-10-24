import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from './items.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() item: Item) {
    return this.itemService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedItem: Partial<Item>): Item {
    return this.itemService.update(id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemService.delete(id);
  }
}
