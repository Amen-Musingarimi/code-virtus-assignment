import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  @Input() formData: any;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();

  communicationTypes: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fetchCommunicationTypes();
  }

  fetchCommunicationTypes(): void {
    this.formDataService.fetchCommunicationTypes().subscribe(
      communicationTypes => {
        this.communicationTypes = communicationTypes;
      },
      error => {
        console.error('Error fetching Communication Types:', error);
      }
    );
  }

  handleCommunicationTypeChange(event: any): void {
    const selectedCommunicationTypeId = event.target.value;
    this.handleChange.emit({
      field: 'communicationId',
      value: selectedCommunicationTypeId
    });
  }

  errorMessage: string = '';

  handleNext(): void {
    this.nextStep.emit();
  }

  handlePrev(): void {
    this.prevStep.emit();
  }
}
