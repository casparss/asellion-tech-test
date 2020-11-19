import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { dialog as dialogMock } from '../../test/mocks/services';
import { EditProductService } from './edit-product.service';

describe('EditProductService', () => {
  let service: EditProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock }
      ]
    });
    service = TestBed.inject(EditProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
