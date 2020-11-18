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
  on(ProductStoreActions.loadAll, (state, { products }) => ( adapter.setAll(products, state) )),
  on(ProductStoreActions.createOne, (state, { product }) => ( adapter.addOne(product, state) )),
  on(ProductStoreActions.updateOne, (state, { product }) => ( adapter.updateOne(product, state) )),
  on(ProductStoreActions.removeOne, (state, { product: { id } }) => ( adapter.removeOne(id, state) )),
);

export const selectors = adapter.getSelectors();
