import { Component, forwardRef, OnInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder, Validators } from '@angular/forms';

interface PasswordInputValue {
  password: string;
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  value: PasswordInputValue;
  onChange: (value: PasswordInputValue) => void;
  onTouched: () => void;
  disabled: boolean = false;
  showPassword: boolean = false;

  passwordForm: FormGroup;
  @Output() passwordChanged = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.value = { password: '' };
    this.onChange = (value: PasswordInputValue) => {};
    this.onTouched = () => {};
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });

    this.passwordForm.get('password')!.valueChanges.subscribe((value: string) => {
      this.value.password = value;
      this.onChange(this.value);
      this.passwordChanged.emit(value);
    });
  }

  get isInvalid() {
    return this.errorMessage && this.touched;
  }

  get errorMessage() {
    if (this.touched && !this.value?.password) {
      return 'Password is required';
    }
    return null;
  }

  get touched() {
    return this.onTouched != null;
  }


  writeValue(value: PasswordInputValue): void {
    this.value = value;
    this.passwordForm.setValue({ password: value.password });
  }
  
  registerOnChange(onChange: (value: PasswordInputValue) => void): void {
    this.onChange = onChange;
  }
  
  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }
  
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
