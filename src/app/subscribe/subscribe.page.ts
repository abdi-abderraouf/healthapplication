import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/classes/patient';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
patient:Patient;
  constructor() { }

  ngOnInit() {
    this.patient=new Patient();
  }

}
