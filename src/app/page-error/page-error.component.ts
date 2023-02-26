import {Component, OnInit} from '@angular/core';
import {APIAny} from "../service/api-any.service";

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit{
  constructor(public api : APIAny){}

  ngOnInit(): void {
    this.api.apiError
  }


}
