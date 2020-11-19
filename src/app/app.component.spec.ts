import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductListComponent, NewProductButtonComponent } from '../test/mocks/components';
import { Store } from '@ngrx/store';
import { Store as StoreMock } from '../test/mocks/services';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NewProductButtonComponent,
        ProductListComponent
      ],
      providers: [{ provide: Store, useValue: new StoreMock() }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dogster');
  });
});
