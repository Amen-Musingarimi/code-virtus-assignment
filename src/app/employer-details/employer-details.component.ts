import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrl: './employer-details.component.css'
})
export class EmployerDetailsComponent {
  @Input() formData: any;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();

  errorMessage: string = '';

  handleNext(): void {
    this.nextStep.emit();
  }

  handlePrev(): void {
    this.prevStep.emit();
  }
}
