import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from './product-store/product-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dogster';

  constructor(private productStoreService: ProductStoreService) {}

  ngOnInit(): void {
    this.productStoreService.fetchProducts();
  }
}
