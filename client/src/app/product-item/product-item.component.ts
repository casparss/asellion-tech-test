import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PLACEHOLDER_IMG_URL } from '../../constants/product';
import { Product } from '../../types/product.type';
import { EditProductService } from '../edit-product/edit-product.service';

@Component({
  selector: 'app-product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(public editProductService: EditProductService) {}

  openEditProductDialog(): void {
    this.editProductService.open(this.product.id);
  }

  public get imageUrl(): string {
    return `${PLACEHOLDER_IMG_URL}?id=${this.product.id}`;
  }
}
