import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NewProductButtonModule } from './new-product-button/new-product-button.module';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ProductListModule,
    NewProductButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
