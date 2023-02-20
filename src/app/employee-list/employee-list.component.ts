import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ROLE } from 'src/environments/environtment';
import { Employee } from "../model/employee";
import { AdminListPageService } from "../service/admin-list-page-service";
import { NavService } from '../service/nav.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-admin',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  searchName?: string;
  formLocal !: FormGroup;
  employees !: Employee[];
  constructor(
    public adminService: AdminListPageService,
    public roleService : RoleService,
    public navService : NavService
  ) {
  }
  ngOnInit() {
    this.navService.choice = 0
    this.adminService.getListEmployee(0)
    this.roleService.role = ROLE.admin
  }
  onSubmit(searchName: string | undefined) {
    this.adminService.searchListEmployee(searchName, 0);

  }

}
