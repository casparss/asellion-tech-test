import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductButtonComponent } from './new-product-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditProductModule } from '../edit-product/edit-product.module';

@NgModule({
  declarations: [NewProductButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    EditProductModule
  ],
  exports: [NewProductButtonComponent]
})
export class NewProductButtonModule { }
