import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'load-n-cache-test-app';

  navLinks = [
    {
      path: '/promises',
      label: 'Promises example'
    },
    {
      path: '/persisted',
      label: 'Persistance example'
    },
    {
      path: '/rxjs',
      label: 'Rxjs example'
    },
  ];
}
