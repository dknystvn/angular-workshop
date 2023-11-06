import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { InventoryItem } from '../../models/inventory-item.types';
import { AppModule } from '../../app.module';
import { InventoryService } from '../../services/inventory.service';
import { BrowseComponent } from './browse.component';
import { UiComponentsModule } from 'ui-components';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  let inventoryServiceMock: jasmine.SpyObj<InventoryService>;

  beforeEach(async () => {
    inventoryServiceMock = jasmine.createSpyObj<InventoryService>('InventoryService', ['findAll']);

    await TestBed.configureTestingModule({
      declarations: [BrowseComponent],
      imports: [AppModule, UiComponentsModule],
      providers: [{ provide: InventoryService, useValue: inventoryServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should find all items', async () => {
    inventoryServiceMock.findAll.and.returnValue(of(generateFakeItems()));

    fixture.detectChanges();

    expect(await firstValueFrom(component.allItems)).toEqual(generateFakeItems());
  });

  it('should display all items', () => {
    inventoryServiceMock.findAll.and.returnValue(of(generateFakeItems()));

    fixture.detectChanges();

    const elementsCount = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'app-inventory-item',
    ).length;

    expect(elementsCount).toBe(2);
  });

  const generateFakeItems = (): ReadonlyArray<InventoryItem> => {
    return [
      { id: '01', name: 'test01', type: 'headphones' },
      { id: '02', name: 'test02', type: 'headphones' },
    ];
  };
});
