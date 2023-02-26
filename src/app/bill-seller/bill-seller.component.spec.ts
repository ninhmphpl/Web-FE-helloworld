import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSellerComponent } from './bill-seller.component';

describe('BillSellerComponent', () => {
  let component: BillSellerComponent;
  let fixture: ComponentFixture<BillSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
