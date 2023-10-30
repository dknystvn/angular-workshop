import { Component } from '@angular/core';
import { InventoryItemType } from 'src/app/models/inventory-item.types';
import { DropDownItem } from 'ui-components';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent {
  private _itemForm: FormGroup<ItemForm>;

  public get options(): ReadonlyArray<DropDownItem<InventoryItemType>> {
    return [
      { name: 'Headphones', value: 'headphones' },
      { name: 'Screen', value: 'screen' },
    ];
  }

  public get itemForm(): FormGroup<ItemForm> {
    return this._itemForm;
  }

  public constructor(private readonly inventory: InventoryService) {
    this._itemForm = new FormGroup<ItemForm>({
      id: new FormControl('', { nonNullable: true }),
      name: new FormControl('', { nonNullable: true }),
      type: new FormControl('headphones', { nonNullable: true }),
    });
  }

  public createNew(): void {
    this.inventory
      .create({
        id: this._itemForm.controls.id.value,
        name: this._itemForm.controls.name.value,
        type: this._itemForm.controls.type.value,
      })
      .subscribe({
        complete: () => {
          this._itemForm.reset();
        },
        error: console.log,
      });
  }
}

interface ItemForm {
  id: FormControl<string>;
  name: FormControl<string>;
  type: FormControl<InventoryItemType>;
}

