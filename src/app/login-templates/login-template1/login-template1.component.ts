import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-template1',
  templateUrl: './login-template1.component.html',
  styleUrls: ['./login-template1.component.scss']
})
export class LoginTemplate1Component implements OnInit {
  images = [2,3].map((n) => `../../../assets/bg_${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
