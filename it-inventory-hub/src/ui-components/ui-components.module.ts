import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonEmphasisToClassPipe } from './button/button-emphasis-to-class.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    MenuBarComponent,
    InputComponent,
    DropdownComponent,
    ButtonEmphasisToClassPipe,
  ],
  imports: [CommonModule],
  providers: [ButtonEmphasisToClassPipe],
  exports: [ButtonComponent, MenuBarComponent, InputComponent, DropdownComponent],
})
export class UiComponentsModule {}

