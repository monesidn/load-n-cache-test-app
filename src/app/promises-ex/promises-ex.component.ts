import { Component, OnInit } from '@angular/core';
import { PromiseDSService } from '../services/PromiseDSService.service';

@Component({
  selector: 'app-promises-ex',
  templateUrl: './promises-ex.component.html',
  styleUrls: ['./promises-ex.component.scss']
})
export class PromisesExComponent implements OnInit {

  constructor(
    public ds: PromiseDSService
  ) {
  }

  ngOnInit(): void {
  }

}
