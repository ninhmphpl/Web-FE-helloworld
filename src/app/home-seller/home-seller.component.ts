import { Component } from '@angular/core';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.scss']
})
export class HomeSellerComponent {
  action = 'list'
  getList(){this.action = 'list'}
  getCreate(){this.action = 'create'}
  getBill(){this.action = 'bill'}
}
