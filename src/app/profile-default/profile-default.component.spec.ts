import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDefaultComponent } from './profile-default.component';

describe('ProfileDefaultComponent', () => {
  let component: ProfileDefaultComponent;
  let fixture: ComponentFixture<ProfileDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
