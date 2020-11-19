import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductStoreState } from 'src/types/product.type';
import { loadAll } from './product-store/product-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dogster';

  constructor(private store: Store<ProductStoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAll());
  }
}
