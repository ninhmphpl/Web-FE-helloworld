import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateComponent } from './employee-create.component';

describe('FormEmployeeComponent', () => {
  let component: EmployeeCreateComponent;
  let fixture: ComponentFixture<EmployeeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
