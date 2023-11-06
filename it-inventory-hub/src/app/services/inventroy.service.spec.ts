import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { InventoryItem } from '../models/inventory-item.types';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(InventoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return all items', () => {
    service.findAll().subscribe((response) => {
      expect(response).toEqual(generateFakeItems());
    });

    const request = httpMock.expectOne(`${environment.backendUrl}/items`);
    request.flush(generateFakeItems());
  });

  it('should return a single item by its id', () => {
    const fakeId = 'id01';

    service.findBy(fakeId).subscribe((response) => {
      expect(response).toEqual(generateFakeItems()[0]);
    });

    const request = httpMock.expectOne(`${environment.backendUrl}/items/${fakeId}`);
    request.flush(generateFakeItems()[0]);
  });

  const generateFakeItems = (): ReadonlyArray<InventoryItem> => {
    return [{ id: '01', name: 'test01', type: 'headphones' }];
  };
});
