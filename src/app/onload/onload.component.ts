import { Component } from '@angular/core';
import { APIService } from '../service/api.service';
import { OnloadService } from '../service/onload.service';

@Component({
  selector: 'app-onload',
  templateUrl: './onload.component.html',
  styleUrls: ['./onload.component.scss']
})
export class OnloadComponent {
  constructor(public onload : OnloadService){}

}
