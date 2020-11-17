import { Component } from '@angular/core';
import { EditProductService } from '../edit-product/edit-product.service';

@Component({
  selector: 'app-new-product-button',
  template: `
    <button (click)="openEditProductDialog()" mat-fab color="accent" aria-label="Open new/edit product dialog.">
      <mat-icon>create</mat-icon>
    </button>
  `
})
export class NewProductButtonComponent {
  constructor(public editProductService: EditProductService) { }

  openEditProductDialog(): void {
    this.editProductService.open();
  }
}
