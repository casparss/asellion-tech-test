import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { EditProductService } from './edit-product.service';

describe('EditProductService', () => {
  let service: EditProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatDialog, useValue: { open(): void {} } }]
    });
    service = TestBed.inject(EditProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
