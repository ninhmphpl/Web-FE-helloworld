import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Employee} from "../model/employee";
import {AdminListPageService} from "../service/admin-list-page-service";

@Component({
  selector: 'app-admin',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  searchName ?: string;
  formLocal !: FormGroup;
  employees !:Employee[];
  constructor(public adminService : AdminListPageService) {
  }
  ngOnInit(){
    this.adminService.getListEmployee(0)
  }
  onSubmit(searchName : string | undefined ) {
    this.adminService.searchListEmployee(searchName,0);

  }

}
