import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateEmployeeComponent } from './product-update-employee.component';

describe('ProductUpdateEmployeeComponent', () => {
  let component: ProductUpdateEmployeeComponent;
  let fixture: ComponentFixture<ProductUpdateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
