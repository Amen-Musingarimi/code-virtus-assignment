import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../form-data.service';

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

  cities: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fetchCities();
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

  handleCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.handleChange.emit({
      field: 'cityId',
      value: selectedCityId
    });
  }

  errorMessage: string = '';

  handleNext(): void {
    this.formData.employerDetails.createAddressCommand.cityId = parseInt(
      this.formData.employerDetails.createAddressCommand.cityId,
      10
    );
    this.nextStep.emit();
  }

  handlePrev(): void {
    this.prevStep.emit();
  }
}
