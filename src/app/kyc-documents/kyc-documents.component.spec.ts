import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDocumentsComponent } from './kyc-documents.component';

describe('KycDocumentsComponent', () => {
  let component: KycDocumentsComponent;
  let fixture: ComponentFixture<KycDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KycDocumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KycDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
