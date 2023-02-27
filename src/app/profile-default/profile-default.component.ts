import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-default',
  templateUrl: './profile-default.component.html',
  styleUrls: ['./profile-default.component.scss']
})
export class ProfileDefaultComponent {
  action = 'bill'
  getBill(){this.action = 'bill'}
  getInfo(){this.action = 'info'}
  getPassword(){this.action = 'pass'}
}
