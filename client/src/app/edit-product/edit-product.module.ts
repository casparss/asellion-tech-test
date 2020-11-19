import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductStoreModule } from '../product-store/product-store.module';
import { EditProductComponent } from './edit-product.component';
import { EditProductService } from './edit-product.service';

@NgModule({
  providers: [EditProductService],
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ProductStoreModule
  ]
})
export class EditProductModule { }
