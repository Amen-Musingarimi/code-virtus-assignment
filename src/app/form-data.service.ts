import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  fetchTitles(): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any>('https://api.clientsure.codevirtus.com/opn/v1/titles/all')
      .pipe(
        map((response: any) =>
          response.content.map((title: any) => ({
            id: title.id,
            name: title.name
          }))
        )
      );
  }
}
