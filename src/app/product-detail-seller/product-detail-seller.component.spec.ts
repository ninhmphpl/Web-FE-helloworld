import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSellerComponent } from './product-detail-seller.component';

describe('ProductDetailSellerComponent', () => {
  let component: ProductDetailSellerComponent;
  let fixture: ComponentFixture<ProductDetailSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
