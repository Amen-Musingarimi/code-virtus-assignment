import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-documents-modal',
  templateUrl: './documents-modal.component.html',
  styleUrl: './documents-modal.component.css'
})
export class DocumentsModalComponent {
  @Output() documentSelected = new EventEmitter<{
    fileName: string;
    filePath: string;
  }>();

  selectDocument(file: File): void {
    const fileDetails = {
      fileName: file.name,
      filePath: '/path/to/frontend/' + file.name
    };

    console.log(fileDetails);
    this.documentSelected.emit(fileDetails);
  }

  onChangeFile(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.selectDocument(file);
    }
  }
}
