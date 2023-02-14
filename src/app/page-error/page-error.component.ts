import { Component } from '@angular/core';
import { OnloadComponent } from '../onload/onload.component';
import { OnloadService } from '../service/onload.service';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent {
  constructor(public onload : OnloadService){}
}
