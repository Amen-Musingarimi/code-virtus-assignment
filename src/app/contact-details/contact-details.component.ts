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
  cities: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  formSubmitted: boolean = false;

  ngOnInit(): void {
    this.fetchCommunicationTypes();
    this.fetchCities();
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

  fetchCities(): void {
    this.formDataService.fetchCities().subscribe(
      cities => {
        this.cities = cities;
      },
      error => {
        console.error('Error fetching Cities:', error);
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

  handleCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.handleChange.emit({
      field: 'cityId',
      value: selectedCityId
    });
  }

  errorMessage: string = '';

  handleNext(): void {
    this.formSubmitted = true;
    this.formData.contactDetails.communicationId = parseInt(
      this.formData.contactDetails.communicationId,
      10
    );
    this.formData.contactDetails.createAddressCommand.cityId = parseInt(
      this.formData.contactDetails.createAddressCommand.cityId,
      10
    );
    if (this.validateForm()) {
      this.nextStep.emit();
    }
  }

  handlePrev(): void {
    this.prevStep.emit();
  }

  validateForm(): boolean {
    this.errorMessage = '';

    if (
      !this.formData.contactDetails.contactPhoneNumber ||
      !this.formData.contactDetails.contactTelephone ||
      !this.formData.contactDetails.communicationId ||
      !this.formData.contactDetails.email ||
      !this.formData.contactDetails.createAddressCommand.residenceNumber ||
      !this.formData.contactDetails.createAddressCommand.suburb ||
      !this.formData.contactDetails.createAddressCommand.cityId
    ) {
      console.log('Invaid Data Error');
      return false;
    }

    if (!this.formData.contactDetails.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    return true;
  }
}
