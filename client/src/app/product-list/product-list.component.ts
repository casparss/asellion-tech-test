import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types/product.type';

@Component({
  selector: 'app-product-list',
  template: `<app-product-item *ngFor="let product of products" [product]=product></app-product-item>`,
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [{
      id: '1',
      name: 'Bob',
      currentPrice: 100,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=1'
    },
    {
      id: '2',
      name: 'Sam',
      currentPrice: 200,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=2'
    },
    {
      id: '3',
      name: 'Jane',
      currentPrice: 400,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=3'
    },
    {
      id: '4',
      name: 'Alexia',
      currentPrice: 100,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=4'
    },
    {
      id: '5',
      name: 'Alice',
      currentPrice: 1000,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=5'
    },
    {
      id: '6',
      name: 'Bob',
      currentPrice: 50,
      lastUpdateDate: new Date(),
      imageUrl: 'http://placekitten.com/200/200?image=6'
  }];
}
