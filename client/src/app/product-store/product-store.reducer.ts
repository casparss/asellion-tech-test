import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, ProductStoreState } from 'src/types/product.type';
import * as ProductStoreActions from './product-store.actions';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductStoreState = adapter.getInitialState({
  isLoading: false
});

export const reducer = createReducer(
  initialState,
  on(ProductStoreActions.loadAllSuccess, (state, { products }) => (
    adapter.setAll(products, state)
  )),
  on(ProductStoreActions.createOneSuccess, (state, { product }) => (
    adapter.addOne(product as Product, state)
  )),
  on(ProductStoreActions.updateOneSuccess, (state, { product }) => (
    adapter.updateOne({ id: product.id, changes: product }, state)
  )),
  on(ProductStoreActions.removeOneSuccess, (state, { id }) => (
    adapter.removeOne(id, state)
  ))
);

export const selectors = adapter.getSelectors();
