import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesExComponent } from './promises-ex/promises-ex.component';
import { RxjsExComponent } from './rxjs-ex/rxjs-ex.component';
import { PersistedExComponent } from './persisted-ex/persisted-ex.component';


const routes: Routes = [
  {path: '', redirectTo: '/promises', pathMatch: 'full'},
  {
    path: 'promises',
    component: PromisesExComponent
  },
  {
    path: 'persisted',
    component: PersistedExComponent
  },
  {
    path: 'rxjs',
    component: RxjsExComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
