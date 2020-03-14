import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RxjsExComponent } from './rxjs-ex/rxjs-ex.component';
import { PromisesExComponent } from './promises-ex/promises-ex.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PersistedExComponent } from './persisted-ex/persisted-ex.component';


@NgModule({
  declarations: [
    AppComponent,
    RxjsExComponent,
    PromisesExComponent,
    PersistedExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
