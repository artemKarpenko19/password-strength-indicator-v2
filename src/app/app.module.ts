import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordShowToggleComponent } from "./password-input/password-show-toggle/password-show-toggle.component"
import { PasswordStrengthIndicatorComponent } from './password-input/password-strength-indicator/password-strength-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordShowToggleComponent,
    PasswordStrengthIndicatorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
