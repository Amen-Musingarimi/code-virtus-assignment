import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  step: number = 1;
  formData: any = {
    address: '',
    service: '',
    date: '',
    time: '',
    name: '',
    phoneNumber: '',
    email: '',
    description: ''
  };

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  handleChange(field: string, value: any): void {
    this.formData[field] = value;
  }

  handleSubmit(): void {
    // Submit data to backend
    console.log(this.formData);
  }
}
