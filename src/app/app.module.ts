import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { KycDocumentsComponent } from './kyc-documents/kyc-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    ContactDetailsComponent,
    BankingDetailsComponent,
    KycDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
