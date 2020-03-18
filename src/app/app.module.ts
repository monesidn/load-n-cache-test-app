import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStorageExComponent } from './custom-storage-ex/custom-storage-ex.component';
import { PersistedExComponent } from './persisted-ex/persisted-ex.component';
import { PromisesExComponent } from './promises-ex/promises-ex.component';
import { RxjsExComponent } from './rxjs-ex/rxjs-ex.component';



@NgModule({
  declarations: [
    AppComponent,
    RxjsExComponent,
    PromisesExComponent,
    PersistedExComponent,
    CustomStorageExComponent,
    CustomStorageExComponent
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
