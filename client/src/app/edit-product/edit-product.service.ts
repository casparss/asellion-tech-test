import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  constructor(public dialog: MatDialog) {}

  open(id?: string): void {
    const dialogRef = this.dialog.open(EditProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
