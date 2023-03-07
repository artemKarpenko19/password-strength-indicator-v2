import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordShowToggleComponent } from './password-show-toggle.component';

describe('PasswordShowToggleComponent', () => {
  let component: PasswordShowToggleComponent;
  let fixture: ComponentFixture<PasswordShowToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordShowToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordShowToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
