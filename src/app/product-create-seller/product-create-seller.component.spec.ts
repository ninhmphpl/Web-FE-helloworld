import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateSellerComponent } from './product-create-seller.component';

describe('ProductCreateSellerComponent', () => {
  let component: ProductCreateSellerComponent;
  let fixture: ComponentFixture<ProductCreateSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreateSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreateSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
