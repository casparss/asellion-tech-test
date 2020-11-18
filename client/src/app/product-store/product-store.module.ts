import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer as productStoreReducer } from './product-store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductStoreService } from './product-store.service';

@NgModule({
  providers: [ProductStoreService],
  imports: [
    CommonModule,
    StoreModule.forRoot({ product: productStoreReducer }),
    StoreDevtoolsModule.instrument()
  ]
})
export class ProductStoreModule {}
