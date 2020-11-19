import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Product, ProductStoreState } from '../../types/product.type';
import { updateOne, createOne } from '../product-store/product-store.actions';
import { filter } from 'rxjs/operators';
import { selectProductById } from '../product-store/product-store.selectors';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    currentPrice: new FormControl('')
  });

  constructor(
    public store: Store<ProductStoreState>,
    public dialog: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public id?: string
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectProductById(this.id))
      .pipe(filter(() => Boolean(this.id)))
      .subscribe(product => this.editProductForm.patchValue(product));

    this.dialog
      .afterClosed()
      .subscribe((() => this.editProductForm.reset()));
  }

  save(): void {
    const product = this.product;
    this.store.dispatch(this.id ? updateOne({ product }) : createOne({ product }));
    this.dialog.close();
  }

  private get product(): Product {
    const { id } = this;
    const product = this.editProductForm.value;
    return { id, ...product };
  }
}
