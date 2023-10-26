import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';

@NgModule({
  declarations: [ButtonComponent, MenuBarComponent, InventoryItemComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, MenuBarComponent, InventoryItemComponent],
})
export class UiComponentsModule {}

