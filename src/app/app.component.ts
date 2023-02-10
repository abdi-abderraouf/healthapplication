import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/folder', icon: 'mail-open' },
    { title: 'IMC', url: '/imc', icon: 'accessibility' },
    { title: 'Pression', url: '/pression', icon: 'heart' },
    { title: 'glycemie', url: '/glucose', icon: 'archive' },
    { title: 'chat', url: '/chat', icon: 'chatbubbles' },
    { title: 'deconnexion', url: '/auth', icon: 'bag-add' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
