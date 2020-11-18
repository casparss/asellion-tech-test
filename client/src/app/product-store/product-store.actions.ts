import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product } from '../../types/product.type';

export const loadAll = createAction('[Product/API] Load Products', props<{ products: Product[] }>());
export const createOne = createAction('[Product/API] Create Product', props<{ product: Product }>());
export const updateOne = createAction('[Product/API] Update Product', props<{ product: Update<Product> }>());
export const removeOne = createAction('[Product/API] Remove Product', props<{ product: Product }>());
