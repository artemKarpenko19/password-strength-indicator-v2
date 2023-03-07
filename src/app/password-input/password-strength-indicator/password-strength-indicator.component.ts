import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {
  @Input() password: string = '';
  strength: number = 0;
  color: string = this.passwordStrengthColor(this.password);

  calculatePasswordStrength(password:string): number {
    let strength = 0;
    if(this.password.length < 8) strength = 3;
    if (this.password.length >= 8 && (/^(?=.*[a-zA-Z])/.test(this.password) || /^(?=.*[^\w\s])/.test(this.password) || /^(?=.*[0-9])/.test(this.password) )) strength = 1;
    if (/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[0-9])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[a-zA-Z])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 2;
    if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/.test(this.password)) strength = 3;
    return strength * 33.3;
  }

  passwordStrengthColor(password:string): string {
    if (this.password.length === 0) {
      return 'light';
    } else if (this.password.length < 8 || this.calculatePasswordStrength(this.password) === 33.3) {
      return 'danger';
    } else if (this.calculatePasswordStrength(this.password) === 66.6) {
      return 'warning';
    } else {
      return 'success';
    }
  }

  passwordStrengthLabel(password:string): string {
    if (this.password.length === 0) {
      return 'Enter your password. It must contain latin letters, numbers and symbols';
    } else if (this.password.length < 8) {
      return 'Easy';
    } else if (this.calculatePasswordStrength(this.password) === 33.3) {
      return 'Easy';
    } else if (this.calculatePasswordStrength(this.password) === 66.6) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }
  

  ngOnChanges() {
    console.log(this.password);
    console.log(this.calculatePasswordStrength(this.password));
    console.log(this.passwordStrengthColor(this.password));
    console.log(this.passwordStrengthLabel(this.password));
  }
}