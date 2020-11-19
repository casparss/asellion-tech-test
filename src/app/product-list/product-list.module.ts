import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemModule } from '../product-item/product-item.module';
import { ProductStoreModule } from '../product-store/product-store.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductItemModule,
    ProductStoreModule
  ],
  exports: [ProductListComponent]
})
export class ProductListModule { }
