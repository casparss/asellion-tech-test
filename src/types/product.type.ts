import { EntityState } from '@ngrx/entity';

export interface Product {
  id: string;
  name: string;
  category: string;
  currentPrice: number;
  lastUpdateDate: Date | string;
}

export interface ProductStoreState extends EntityState<Product> {
  isLoading: boolean;
}
