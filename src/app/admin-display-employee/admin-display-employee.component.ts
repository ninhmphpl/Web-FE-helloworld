import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Employee} from "../model/employee";
import {AdminListPageService} from "../service/admin-list-page-service";

@Component({
  selector: 'app-admin-display-employee',
  templateUrl: './admin-display-employee.component.html',
  styleUrls: ['./admin-display-employee.component.scss']
})
export class AdminDisplayEmployeeComponent implements OnInit{
  formLocal !: FormGroup;
  employees !:Employee[];
  constructor(public adminService : AdminListPageService) {
  }
  ngOnInit(){
  this.adminService.getListEmployee(0)
    }

}
