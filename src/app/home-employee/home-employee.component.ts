import { Component } from '@angular/core';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})
export class HomeEmployeeComponent {
  action = 'list'
  getList(){this.action = 'list'}
  getCreate(){this.action = 'create'}
  getBill(){this.action = 'bill'}
}
