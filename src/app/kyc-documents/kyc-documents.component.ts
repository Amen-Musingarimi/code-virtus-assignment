import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kyc-documents',
  templateUrl: './kyc-documents.component.html',
  styleUrls: ['./kyc-documents.component.css']
})
export class KycDocumentsComponent {
  @Input() formData: any;
  @Output() prevStep = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<{ field: string; value: any }>();
  @Output() handleSubmit = new EventEmitter<void>();

  showModal = false;

  constructor() {}

  handlePrev(): void {
    this.prevStep.emit();
  }

  toggleModal() {
    console.log('Show Model button clicked');
    this.showModal = !this.showModal;
  }

  handleFormSubmit(): void {
    this.handleSubmit.emit();
  }

  addDocumentFile(fileDetails: { fileName: string; filePath: string }): void {
    this.formData.documentFiles.push({
      fileName: fileDetails.fileName,
      filePath: fileDetails.filePath
    });
  }
}
