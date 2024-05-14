import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {
  @Input() formData: any;
  @Output() nextStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();

  errorMessage: string = '';
  addressValid: boolean = false;

  handleNext(): void {
    this.nextStep.emit();
  }
}
