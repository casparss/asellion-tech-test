import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product, ProductStoreState } from 'src/types/product.type';
import { selectAllProducts } from '../product-store/product-store.selectors';

@Component({
  selector: 'app-product-list',
  template: `<app-product-item *ngFor="let product of products$ | async" [product]=product></app-product-item>`,
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(store: Store<ProductStoreState>) {
    this.products$ = store.select(selectAllProducts);
  }
}
