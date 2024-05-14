import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kyc-documents',
  templateUrl: './kyc-documents.component.html',
  styleUrl: './kyc-documents.component.css'
})
export class KycDocumentsComponent {
  @Input() formData: any;
  @Output() prevStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();
  @Output() handleSubmit = new EventEmitter<void>();
}
