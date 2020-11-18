import { EntityState } from '@ngrx/entity';

export interface Product {
  id: string;
  name: string;
  currentPrice: number;
  lastUpdateDate: Date | string;
  imageUrl: string;
}

export interface ProductStoreState extends EntityState<Product> {
  isLoading: boolean;
}
