import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor(private http: HttpClient) {}

  submitFormData(formData: Client): Observable<any> {
    return this.http.post<any>(
      'https://api.clientsure.codevirtus.com/opn/v1/individual-client/create',
      formData
    );
  }
}
