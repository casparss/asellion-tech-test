import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  createOne,
  createOneFail,
  createOneSuccess,
  loadAll,
  loadAllFail,
  loadAllSuccess,
  removeOne,
  removeOneFail,
  removeOneSuccess,
  updateOne,
  updateOneFail,
  updateOneSuccess
} from '../product-store/product-store.actions';
import { ProductStoreService } from './product-store.service';

@Injectable()
export class ProductStoreEffects {
  constructor(
    private actions$: Actions,
    private productStoreService: ProductStoreService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      mergeMap(() => (
        this.productStoreService
          .fetchProducts()
          .pipe(
            map(products => loadAllSuccess({ products })),
            catchError(() => of(loadAllFail))
          )
      ))
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOne),
      mergeMap(({ product: productPayload }) => (
        this.productStoreService
          .updateProduct(productPayload)
          .pipe(
            map(product => updateOneSuccess({ product })),
            catchError(() => of(updateOneFail))
          )
      ))
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOne),
      mergeMap(({ product: productPayload }) => (
        this.productStoreService
          .createProduct(productPayload)
          .pipe(
            map(product => createOneSuccess({ product })),
            catchError(() => of(createOneFail))
          )
      ))
    )
  );

  removeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeOne),
      mergeMap(({ product: productPayload }) => (
        this.productStoreService
          .removeProduct(productPayload)
          .pipe(
            map(({ id }) => removeOneSuccess({ id })),
            catchError(() => of(removeOneFail))
          )
      ))
    )
  );
}



