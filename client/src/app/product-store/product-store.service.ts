import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productsStub } from '../../stub/products';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  fetchProducts(): Observable<Product[]> {
    return of(productsStub);
  }

  createProduct(product): Observable<Product> {
    return of(setLastUpdatedDate(generateId(product)) as Product);
  }

  updateProduct(product): Observable<Product> {
    return of(setLastUpdatedDate(product) as Product);
  }

  removeProduct({ id }: Product): Observable<{ id: string }> {
    return of({ id });
  }
}

const setLastUpdatedDate = (item: Partial<unknown>): Partial<Product> => ({
  ...item,
  lastUpdateDate: new Date()
});

let count = 8;

const generateId = (item: Partial<unknown>): Partial<Product> => ({
  ...item,
  id: (count++).toString()
});
