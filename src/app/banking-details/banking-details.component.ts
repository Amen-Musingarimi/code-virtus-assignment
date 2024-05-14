import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrl: './banking-details.component.css'
})
export class BankingDetailsComponent {
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
