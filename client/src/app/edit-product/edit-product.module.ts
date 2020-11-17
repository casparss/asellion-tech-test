import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product.component';
import { EditProductService } from './edit-product.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  providers: [EditProductService],
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class EditProductModule { }
