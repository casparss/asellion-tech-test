import { Component, Input } from '@angular/core';
import { Product } from 'src/types/product.type';
import { EditProductService } from '../edit-product/edit-product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(public editProductService: EditProductService) {}

  openEditProductDialog(): void {
    this.editProductService.open(this.product.id);
  }
}
