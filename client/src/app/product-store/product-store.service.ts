import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductStoreState } from '../../types/product.type';
import { productsStub } from '../../stub/products';
import { loadAll } from './product-store.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  constructor(private store: Store<ProductStoreState>) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.store.dispatch(loadAll({ products: productsStub }));
  }
}
