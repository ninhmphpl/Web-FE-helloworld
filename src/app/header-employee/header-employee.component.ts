import {Component, OnInit} from '@angular/core';
import {APIAny} from "../service/api-any.service";
import {ROLE} from "../../environments/environtment";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-header-employee',
  templateUrl: './header-employee.component.html',
  styleUrls: ['./header-employee.component.scss']
})
export class HeaderEmployeeComponent implements OnInit {
  role: any
  linkRoot : any

  constructor(
    public api: APIAny,
    public userService : UserService,
  ) {
  }

  ngOnInit(): void {
    this.role = this.api.getRole();
    this.linkRoot = (this.role=='ROLE_ADMIN')?'/admin':'/employee'
    if(this.role == ROLE.employee){
      this.userService.getEmployee();
    }
    if(this.role == ROLE.admin){
      this.userService.getAdmin();
    }
  }

}
