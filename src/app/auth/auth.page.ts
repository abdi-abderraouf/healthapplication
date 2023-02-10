import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/classes/patient';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  patient:Patient;

  constructor() { }

  ngOnInit() {
    this.patient=new Patient();
  }
  connect()
  {
    if(this.patient.login=="admin" && this.patient.mdp=="password")
    window.location.replace("folder/inbox");

  else
  alert("faute en login ou en mot depasse ")
  }
}
