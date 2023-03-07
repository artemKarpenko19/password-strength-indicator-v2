import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-show-toggle',
  templateUrl: './password-show-toggle.component.html',
  styleUrls: ['./password-show-toggle.component.css']
})
export class PasswordShowToggleComponent {
  @Output() showPassword: EventEmitter<any> = new EventEmitter<any>();

  
  changeVisibility() {
    this.showPassword.emit()
  }
}
