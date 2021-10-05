import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplate2Component } from './login-template2.component';

describe('LoginTemplate2Component', () => {
  let component: LoginTemplate2Component;
  let fixture: ComponentFixture<LoginTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
