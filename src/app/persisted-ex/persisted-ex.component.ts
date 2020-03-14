import { Component, OnInit } from '@angular/core';
import { PersistedDSService } from '../services/PersistedDSService.service';

@Component({
  selector: 'app-persisted-ex',
  templateUrl: './persisted-ex.component.html',
  styleUrls: ['./persisted-ex.component.scss']
})
export class PersistedExComponent implements OnInit {

  constructor(
    public ds: PersistedDSService
  ) {
  }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload();
  }
}
