import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(
    public dialog: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public id?: string
  ) {}

  editProductForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    currentPrice: new FormControl('')
  });

  save(): void {
    console.log(this.editProductForm.value);
    this.dialog.close();
  }
}
