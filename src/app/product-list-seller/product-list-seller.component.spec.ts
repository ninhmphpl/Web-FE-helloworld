import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSellerComponent } from './product-list-seller.component';

describe('ProductListSellerComponent', () => {
  let component: ProductListSellerComponent;
  let fixture: ComponentFixture<ProductListSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
