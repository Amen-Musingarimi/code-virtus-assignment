import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {
  @Input()
  formData!: Client;
  @Output() nextStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();

  titles: { id: number; name: string }[] = [];
  genders: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  formSubmitted: boolean = false;

  ngOnInit(): void {
    this.fetchTitles();
    this.fetchGenders();
  }

  fetchTitles(): void {
    this.formDataService.fetchTitles().subscribe(
      titles => {
        this.titles = titles;
      },
      error => {
        console.error('Error fetching titles:', error);
      }
    );
  }

  fetchGenders(): void {
    this.formDataService.fetchGenders().subscribe(
      genders => {
        this.genders = genders;
      },
      error => {
        console.error('Error fetching genders:', error);
      }
    );
  }

  handleTitleChange(event: any): void {
    const selectedTitleId = parseInt(event.target.value, 10);
    this.handleChange.emit({ field: 'titleId', value: selectedTitleId });
  }

  handleGenderChange(event: any): void {
    const selectedGenderId = parseInt(event.target.value, 10);
    this.handleChange.emit({ field: 'genderId', value: selectedGenderId });
  }

  errorMessage: string = '';
  addressValid: boolean = false;

  handleNext(): void {
    this.formSubmitted = true;
    this.formData.dateOfBirth = this.formatDate(this.formData.dateOfBirth);
    if (this.validateForm()) {
      this.nextStep.emit();
    }
  }

  validateForm(): boolean {
    this.errorMessage = '';

    if (
      !this.formData.titleId ||
      !this.formData.genderId ||
      !this.formData.firstName ||
      !this.formData.surname ||
      !this.formData.nationalIdNumber ||
      !this.formData.dateOfBirth ||
      !this.formData.occupation ||
      !this.formData.employmentStatus
    ) {
      this.errorMessage = 'All fields are required.';
      return false;
    }

    const dob = new Date(this.formData.dateOfBirth);
    const currentDate = new Date();
    if (dob >= currentDate) {
      if (this.formSubmitted) {
        this.errorMessage = 'Date of birth must be in the past.';
      }
      return false;
    }

    return true;
  }

  isFutureDate(date: string): boolean {
    const currentDate = new Date();
    const inputDate = new Date(date);
    return inputDate > currentDate;
  }

  formatDate(date: string): string {
    if (!date) return '';

    const dateObj = new Date(date);
    const day = dateObj
      .getDate()
      .toString()
      .padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
