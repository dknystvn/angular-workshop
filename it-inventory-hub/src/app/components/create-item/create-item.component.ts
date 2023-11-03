import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryItemType } from '../../models/inventory-item.types';
import { InventoryService } from '../../services/inventory.service';
import { DropDownItem } from 'ui-components';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent {
  private _itemForm: FormGroup<ItemForm>;

  public get options(): ReadonlyArray<DropDownItem> {
    return [
      { name: 'Headphones', value: 'headphones' },
      { name: 'Screen', value: 'screen' },
      { name: 'Laptop', value: 'laptop' },
    ];
  }

  public get itemForm(): FormGroup<ItemForm> {
    return this._itemForm;
  }

  public constructor(private readonly inventory: InventoryService) {
    this._itemForm = new FormGroup<ItemForm>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(4)],
      }),
      type: new FormControl('headphones', { nonNullable: true }),
    });
  }

  public createNew(): void {
    if (this._itemForm.valid) {
      this.inventory
        .create({
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
}

interface ItemForm {
  name: FormControl<string>;
  type: FormControl<InventoryItemType>;
}

