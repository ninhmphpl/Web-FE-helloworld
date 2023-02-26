import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateSellerComponent } from './product-update-seller.component';

describe('ProductUpdateSellerComponent', () => {
  let component: ProductUpdateSellerComponent;
  let fixture: ComponentFixture<ProductUpdateSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpdateSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
