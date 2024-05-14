import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  step: number = 1;
  formData: any = {
    title: '',
    gender: '',
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    occupation: '',
    employmentStatus: '',
    email: '',
    mobileNumber: '',
    telephone: '',
    communicationType: '',
    residentNumber: '',
    suburb: '',
    city: '',
    accountHolderName: '',
    accountNumber: '',
    currency: '',
    bank: '',
    bankBranch: '',
    nationalIdCopy: null,
    proofOfResidence: null,
    paySlip: null,
    bankStatement: null,
    confirmationOfEmployment: null
  };

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  navigateToStep(step: number): void {
    this.step = step;
  }

  handleChange(field: string, value: any): void {
    this.formData[field] = value;
  }

  handleSubmit(): void {
    // Submit data to backend
    console.log(this.formData);
  }
}
