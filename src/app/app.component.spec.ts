import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

import { ApiService } from '../app/services/api.service';

describe('AppComponent', () => {
  let apiSvc: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ApiService],
      declarations: [AppComponent],
    });

    apiSvc = TestBed.get(ApiService);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'quicken-loans'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('quicken-loans');
  });

  it('should render Add Contact Btn', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.add-contact').textContent).toBeDefined();

    fixture.detectChanges();
  });

  // it('should set form value', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   comp = fixture.componentInstance;
  //   comp.contactForm.controls['firstName'].setValue('Jerome');
  //   comp.contactForm.controls['lastName'].setValue('King');
  //   comp.contactForm.controls['email'].setValue('jerome@kingsoftware.com');
  //   comp.contactForm.controls['company'].setValue('King Software');
  //   comp.contactForm.controls['phone'].setValue('313-408-4023');
  //   comp.contactForm.controls['address'].setValue('3200 Edgewood Ave, Atlanta, GA, 30035');
  //   // expect(comp.contactForm.valid).toBeTruthy();

  //   // expect(compiled.querySelector('.add-contact').textContent).toBeDefined();
  // });
});
