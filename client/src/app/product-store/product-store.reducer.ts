import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, ProductStoreState } from 'src/types/product.type';
import * as ProductStoreActions from './product-store.actions';
import last from 'lodash.last';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductStoreState = adapter.getInitialState({
  isLoading: false
});

export const reducer = createReducer(
  initialState,
  on(ProductStoreActions.loadAll, (state, { products }) => (
    adapter.setAll(products, state)
  )),
  on(ProductStoreActions.createOne, (state, { product }) => {
    const mutatedProducted = setLastUpdatedDate(generateId(state, product));
    return adapter.addOne(mutatedProducted as Product, state);
  }),
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

const generateId = (state: ProductStoreState, item: Partial<unknown>): Partial<Product> => ({
  ...item,
  id: (Number(last(state.ids)) + 1).toString()
});

export const selectors = adapter.getSelectors();
