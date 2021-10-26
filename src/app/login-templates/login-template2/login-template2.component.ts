import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-template2',
  templateUrl: './login-template2.component.html',
  styleUrls: ['./login-template2.component.scss']
})
export class LoginTemplate2Component implements OnInit {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false; //Carousel arrows and indicators 
  pauseOnHover = true;
  pauseOnFocus = true;

  hide = true; //matinput password hide 

  constructor() { }

  ngOnInit(): void {
  }

}
