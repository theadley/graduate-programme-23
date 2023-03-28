import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth: Auth = inject(Auth);

  signUp() {
    createUserWithEmailAndPassword(this.auth, 'test@test.com', 'asdf1234#').then(console.log).catch(console.error);
  }
}
