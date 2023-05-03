import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPopupVisible = false;

  onClick() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
