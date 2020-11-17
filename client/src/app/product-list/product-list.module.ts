import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemModule } from '../product-item/product-item.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductItemModule
  ],
  exports: [ProductListComponent]
})
export class ProductListModule { }
