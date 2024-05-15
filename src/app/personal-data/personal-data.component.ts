import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {
  @Input() formData: any;
  @Output() nextStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();

  titles: { id: number; name: string }[] = [];
  genders: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

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
    const selectedTitleId = event.target.value;
    this.handleChange.emit({ field: 'title', value: selectedTitleId });
  }

  handleGenderChange(event: any): void {
    const selectedGenderId = event.target.value;
    this.handleChange.emit({ field: 'gender', value: selectedGenderId });
  }

  errorMessage: string = '';
  addressValid: boolean = false;

  handleNext(): void {
    this.nextStep.emit();
  }
}
