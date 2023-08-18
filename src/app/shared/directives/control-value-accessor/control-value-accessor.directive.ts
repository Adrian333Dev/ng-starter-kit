import { Directive, OnInit, Inject, Injector } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, startWith, tap } from 'rxjs';

import { destroySub } from '@shared/utils/functions';
import { validationMessages as messages } from '@shared/utils/maps';

const { required } = Validators;

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
})
export class ControlValueAccessorDirective<T>
  implements OnInit, ControlValueAccessor
{
  control!: FormControl;

  private _required!: boolean;
  private _disabled = false;
  private destroy$ = destroySub();
  private onTouched!: () => T;

  constructor(@Inject(Injector) private injector: Injector) {}
  // private _injector = inject(Injector);

  ngOnInit(): void {
    this.initControl();
    this._required = this.control?.hasValidator(required) ?? false;
  }

  initControl(): void {
    try {
      const control = this.injector.get(NgControl);
      switch (control.constructor) {
        case FormControlName:
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(control as FormControlName);
          break;
        default:
          this.control = (control as FormControlDirective)
            .form as FormControl<T>;
      }
    } catch (error) {
      this.control = new FormControl();
    }
  }

  writeValue(value: T): void {
    this.control
      ? this.control.setValue(value)
      : (this.control = new FormControl(value));
  }
  registerOnChange(fn: (value?: T) => void): void {
    this.control?.valueChanges
      .pipe(
        this.destroy$(),
        startWith(this.control.value),
        distinctUntilChanged(),
        tap((value) => fn(value))
      )
      .subscribe(() => this.control.markAsUntouched());
  }
  registerOnTouched(fn: () => T): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  get invalid(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get valid(): boolean {
    return this.control.valid && (this.control.dirty || this.control.touched);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  get required(): boolean {
    return this._required;
  }

  get errorMessage(): string {
    const { errors } = this.control ?? {};
    if (errors) {
      const [firstErrorKey] = Object.keys(errors);
      const message = messages[firstErrorKey as keyof typeof messages];
      return typeof message === 'function'
        ? message(errors[firstErrorKey])
        : message;
    }
    return '';
  }
}
