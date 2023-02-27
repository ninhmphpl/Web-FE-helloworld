import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateEmployeeComponent } from './product-create-employee.component';

describe('ProductCreateEmployeeComponent', () => {
  let component: ProductCreateEmployeeComponent;
  let fixture: ComponentFixture<ProductCreateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreateEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
