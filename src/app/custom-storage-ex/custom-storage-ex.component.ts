import { Component, OnInit } from '@angular/core';
import { CustomPersistenceDSService } from '../services/CustomPersistanceDSService.service';

@Component({
  selector: 'app-custom-storage-ex',
  templateUrl: './custom-storage-ex.component.html',
  styleUrls: ['./custom-storage-ex.component.scss']
})
export class CustomStorageExComponent implements OnInit {

  constructor(
    public ds: CustomPersistenceDSService
  ) { }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload();
  }
}
