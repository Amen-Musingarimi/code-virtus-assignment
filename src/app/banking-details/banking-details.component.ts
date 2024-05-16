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
  banks: { id: number; name: string }[] = [];
  bankBranches: { id: number; name: string }[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fetchCurrencies();
    this.fetchBanks();
  }

  formSubmitted: boolean = false;

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

  fetchBanks(): void {
    this.formDataService.fetchBanks().subscribe(
      banks => {
        this.banks = banks;
      },
      error => {
        console.error('Error fetching banks', error);
      }
    );
  }

  fetchBankBranches(id: any): void {
    this.formDataService.fetchBankBranches(id).subscribe(
      bankBranches => {
        this.bankBranches = bankBranches;
      },
      error => {
        console.error('Error fetching bank branches', error);
      }
    );
  }

  handleBankChange(event: any): void {
    const selectedBankId = event.target.value;
    this.fetchBankBranches(selectedBankId);
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
    this.formSubmitted = true;
    this.formData.bankingDetails.currencyId = parseInt(
      this.formData.bankingDetails.currencyId,
      10
    );
    this.formData.bankingDetails.bankBranchId = parseInt(
      this.formData.bankingDetails.bankBranchId,
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
      !this.formData.bankingDetails.accountNumber ||
      !this.formData.bankingDetails.accountHolderName ||
      !this.formData.bankingDetails.currencyId ||
      !this.formData.bankingDetails.bankBranchId
    ) {
      console.log('Invaid Data Error');
      return false;
    }

    return true;
  }
}
