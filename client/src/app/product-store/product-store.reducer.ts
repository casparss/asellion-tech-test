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
  on(ProductStoreActions.loadAll, (state, { products }) => (
    adapter.setAll(products, state)
  )),
  on(ProductStoreActions.createOne, (state, { product }) => (
    adapter.addOne(setLastUpdatedDate(product) as Product, state)
  )),
  on(ProductStoreActions.updateOne, (state, { product: { id, ...rest } }) => (
    adapter.updateOne({ id, changes: setLastUpdatedDate(rest) }, state)
  )),
  on(ProductStoreActions.removeOne, (state, { product: { id } }) => (
    adapter.removeOne(id, state)
  ))
);

const setLastUpdatedDate = (item: Partial<unknown>): Partial<Product> => ({
  ...item,
  lastUpdateDate: new Date()
});

export const selectors = adapter.getSelectors();
