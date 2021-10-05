import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplate3Component } from './login-template3.component';

describe('LoginTemplate3Component', () => {
  let component: LoginTemplate3Component;
  let fixture: ComponentFixture<LoginTemplate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplate3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
