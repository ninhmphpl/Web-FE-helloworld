import { Component } from '@angular/core';
import { environtment } from 'src/environments/environtment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  role = environtment.role
}
