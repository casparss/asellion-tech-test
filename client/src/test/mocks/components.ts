import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: ''
})
export class ProductListComponent {}

@Component({
  selector: 'app-new-product-button',
  template: ''
})
export class NewProductButtonComponent {}

export const dialog = {
  open(): void {},
  afterClosed(): any {
    return {
      subscribe(): void {}
    };
  }
}
