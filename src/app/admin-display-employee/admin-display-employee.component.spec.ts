import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayEmployeeComponent } from './admin-display-employee.component';

describe('AdminComponent', () => {
  let component: AdminDisplayEmployeeComponent;
  let fixture: ComponentFixture<AdminDisplayEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDisplayEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
