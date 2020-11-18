import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { Store as StoreMock } from '../../test/mocks/services';
import { EditProductModule } from '../edit-product/edit-product.module';
import { EditProductComponent } from './edit-product.component';
import { dialog as dialogMock } from '../../test/mocks/components';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EditProductModule,
        ReactiveFormsModule,
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      declarations: [EditProductComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: Store, useValue: new StoreMock() },
        [{ provide: MatDialog, useValue: {} }]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
