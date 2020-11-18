import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductService } from '../edit-product/edit-product.service';
import { ProductItemComponent } from './product-item.component';

const mockProduct = {
  id: '1',
  name: 'Name',
  category: 'Category',
  currentPrice: 100,
  lastUpdateDate: new Date()
};

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: EditProductService, useValue: { open(): void {} } },
      ],
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
