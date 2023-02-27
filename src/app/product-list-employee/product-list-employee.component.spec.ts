import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListEmployeeComponent } from './product-list-employee.component';

describe('ProductListEmployeeComponent', () => {
  let component: ProductListEmployeeComponent;
  let fixture: ComponentFixture<ProductListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
