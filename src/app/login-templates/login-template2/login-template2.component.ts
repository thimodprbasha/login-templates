import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-template2',
  templateUrl: './login-template2.component.html',
  styleUrls: ['./login-template2.component.scss']
})
export class LoginTemplate2Component implements OnInit {
  images = [2,3].map((n) => `../../../assets/bg_${n}.jpg`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor() { }

  ngOnInit(): void {
  }

}
