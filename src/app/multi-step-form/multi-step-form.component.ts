import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  step: number = 1;
  formData: Client = {
    titleId: 0,
    firstName: '',
    surname: '',
    employmentStatus: '',
    genderId: 0,
    nationalIdNumber: '',
    occupation: '',
    dateOfBirth: '',
    contactDetails: {
      contactPhoneNumber: '',
      contactTelephone: '',
      communicationId: 0,
      email: '',
      createAddressCommand: {
        residenceNumber: '',
        suburb: '',
        cityId: 0
      }
    },
    employerDetails: {
      employerName: '',
      employerEmail: '',
      employerPhone: '',
      employerTelephone: '',
      createAddressCommand: {
        residenceNumber: '',
        suburb: '',
        cityId: 0
      }
    },
    bankingDetails: {
      accountNumber: '',
      accountHolderName: '',
      currencyId: 0,
      bankBranchId: 0
    },
    documentFiles: []
  };

  constructor(private formDataService: FormDataService) {}

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
    if (field === 'titleId' || field === 'genderId') {
      this.formData[field] = parseInt(value, 10);
    } else {
      (this.formData as any)[field] = value;
    }
  }

  addDocumentFile(fileDetails: { fileName: string; filePath: string }): void {
    this.formData.documentFiles.push({
      fileName: fileDetails.fileName,
      filePath: fileDetails.filePath
    });
  }

  handleSubmit(): void {
    this.formDataService.submitFormData(this.formData).subscribe(
      response => {
        console.log('Form data submitted successfully:', response);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
    );
  }
}
