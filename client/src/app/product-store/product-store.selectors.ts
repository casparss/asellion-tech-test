import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { ProductStoreState } from 'src/types/product.type';
import { reducer as productStoreReducer, selectors as productStoreSelectors } from './product-store.reducer';

export interface State {
  product: ProductStoreState;
}

export const reducers: ActionReducerMap<State> = {
  product: productStoreReducer
};

export const selectProductStoreState = createFeatureSelector<ProductStoreState>('product');

export const selectAllProducts = createSelector(
  selectProductStoreState,
  productStoreSelectors.selectAll
);

export const selectProductById = (id: string) => createSelector(
  selectProductStoreState,
  ({ entities }) => entities[id]
);
