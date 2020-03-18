import { Component, OnInit } from '@angular/core';
import { RxJsPersistedDSService } from '../services/RxJsPersistedDSService.service';


@Component({
  selector: 'app-rxjs-ex',
  templateUrl: './rxjs-ex.component.html',
  styleUrls: ['./rxjs-ex.component.scss']
})
export class RxjsExComponent implements OnInit {

  constructor(
    public ds: RxJsPersistedDSService
  ) {

  }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload();
  }
}
