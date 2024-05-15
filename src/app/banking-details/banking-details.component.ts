import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../form-data.service';

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

  currencies: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fetchCurrencies();
  }

  fetchCurrencies(): void {
    this.formDataService.fetchCurrencies().subscribe(
      currencies => {
        this.currencies = currencies;
      },
      error => {
        console.error('Error fetching Currencies', error);
      }
    );
  }

  handleCurrencyChange(event: any): void {
    const selectedCurrency = event.target.value;
    this.handleChange.emit({
      field: 'currencyId',
      value: selectedCurrency
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
