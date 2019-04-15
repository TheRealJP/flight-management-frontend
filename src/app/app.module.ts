
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartCheckinComponent } from './components/start-checkin/start-checkin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmCheckinComponent } from './components/confirm-checkin/confirm-checkin.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartCheckinComponent,
    CheckinComponent,
    ConfirmCheckinComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
