import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDefaulComponent } from './product-detail-defaul.component';

describe('ProductDetailDefaulComponent', () => {
  let component: ProductDetailDefaulComponent;
  let fixture: ComponentFixture<ProductDetailDefaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailDefaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailDefaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
