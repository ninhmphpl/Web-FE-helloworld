import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailEmployeeComponent } from './product-detail-employee.component';

describe('ProductDetailEmployeeComponent', () => {
  let component: ProductDetailEmployeeComponent;
  let fixture: ComponentFixture<ProductDetailEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
