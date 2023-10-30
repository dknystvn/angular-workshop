import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { InputComponent } from './input/input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    ButtonComponent,
    MenuBarComponent,
    InventoryItemComponent,
    InputComponent,
    DropdownComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    MenuBarComponent,
    InventoryItemComponent,
    InputComponent,
    DropdownComponent,
  ],
})
export class UiComponentsModule {}

