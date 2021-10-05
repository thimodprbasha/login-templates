import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplate1Component } from './login-template1.component';

describe('LoginTemplate1Component', () => {
  let component: LoginTemplate1Component;
  let fixture: ComponentFixture<LoginTemplate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplate1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
