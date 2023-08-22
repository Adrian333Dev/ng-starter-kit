import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '../input';
import { DropdownComponent } from '../dropdown';
import { SelectComponent } from '../select';

type FormItemType = 'input' | 'dropdown' | 'select';

interface IFormItemConfig {
  type: FormItemType;
  label: string;
  name: string;
  options?: string[];
  placeholder?: string;
  value?: string;
  validators?: any[];
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    DropdownComponent,
    SelectComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() formConfig: IFormItemConfig[] = [];
  @Input() submitLabel: string = 'Submit';
  @Input() cancelLabel: string = 'Cancel';
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  public form = new FormGroup({});
}
