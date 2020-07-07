import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './services/api.service';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [AppComponent, PhonePipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
