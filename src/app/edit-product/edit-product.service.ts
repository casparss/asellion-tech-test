import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  constructor(public dialog: MatDialog) {}

  open(id?: string): void {
    this.dialog.open(EditProductComponent, { data: id });
  }
}
