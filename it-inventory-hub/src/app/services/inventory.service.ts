import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ignoreElements, noop, Observable, share } from 'rxjs';
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

  public findBy(id: string): Observable<InventoryItem> {
    return this.httpClient.get<InventoryItem>(
      `${environment.backendUrl}/${InventoryService.ENDPOINT_URL}/${id}`,
    );
  }

  public create(newItem: Omit<InventoryItem, 'id'>): Observable<void> {
    return this.httpClient
      .post(`${environment.backendUrl}/${InventoryService.ENDPOINT_URL}`, {
        ...newItem,
        id: this.generateId(),
      })
      .pipe(ignoreElements());
  }

  public remove(id: string): Observable<void> {
    return this.httpClient
      .delete<ReadonlyArray<InventoryItem>>(
        `${environment.backendUrl}/${InventoryService.ENDPOINT_URL}/${id}`,
      )
      .pipe(ignoreElements());
  }

  private generateId(): string {
    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);

    return `NEW-` + randomFourDigitNumber.toString();
  }
}
