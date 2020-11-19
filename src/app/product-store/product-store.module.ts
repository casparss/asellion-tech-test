import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer as productStoreReducer } from './product-store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductStoreService } from './product-store.service';
import { ProductStoreEffects } from './product-store.effects';

@NgModule({
  providers: [ProductStoreService],
  imports: [
    CommonModule,
    StoreModule.forRoot({ product: productStoreReducer }),
    EffectsModule.forRoot([ProductStoreEffects]),
    StoreDevtoolsModule.instrument()
  ]
})
export class ProductStoreModule {}
