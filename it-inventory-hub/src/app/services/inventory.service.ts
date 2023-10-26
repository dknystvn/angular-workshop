import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ignoreElements, noop, Observable } from 'rxjs';
import { InventoryItem } from '../models/inventory-item.types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private static readonly ENDPOINT_URL = 'items';

  public constructor(private readonly httpClient: HttpClient) {}

  public findAll(): Observable<ReadonlyArray<InventoryItem>> {
    return this.httpClient.get<ReadonlyArray<InventoryItem>>(
      `${environment.backendUrl}/${InventoryService.ENDPOINT_URL}`,
    );
  }

  public removeItem(id: string): Observable<void> {
    return this.httpClient
      .delete<ReadonlyArray<InventoryItem>>(
        `${environment.backendUrl}/${InventoryService.ENDPOINT_URL}/${id}`,
      )
      .pipe(ignoreElements());
  }
}
