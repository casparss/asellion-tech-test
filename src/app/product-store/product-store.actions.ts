import { createAction, props } from '@ngrx/store';
import { Product } from '../../types/product.type';

export const loadAll = createAction('[Product/API] Load Products');
export const loadAllSuccess = createAction('[Product/API] Load Products Success', props<{ products: Product[] }>());
export const loadAllFail = createAction('[Product/API] Load Products Fail', props<{ message: string }>());

export const createOne = createAction('[Product/API] Create Product', props<{ product: Partial<Product> }>());
export const createOneSuccess = createAction('[Product/API] Create Product Success', props<{ product: Partial<Product> }>());
export const createOneFail = createAction('[Product/API] Create Product Fail', props<{ message: string }>());

export const updateOne = createAction('[Product/API] Update Product', props<{ product: Product }>());
export const updateOneSuccess = createAction('[Product/API] Update Product Success', props<{ product: Product }>());
export const updateOneFail = createAction('[Product/API] Update Product Fail', props<{ message: string }>());

export const removeOne = createAction('[Product/API] Remove Product', props<{ product: Product }>());
export const removeOneSuccess = createAction('[Product/API] Remove Product Success', props<{ id: string }>());
export const removeOneFail = createAction('[Product/API] Remove Product Fail', props<{ message: string }>());
