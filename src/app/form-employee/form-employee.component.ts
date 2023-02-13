import {Component, Injectable, OnInit} from '@angular/core';
import {AdminEmployeeRenderService} from "../service/admin-employee-render.service";
import {environtment, HttpOptions} from "../../environments/environtment";
import {EmployeeRender} from "../model/employee-Render";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../model/employee";

const url = environtment.url;

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  formEmployee !: FormGroup
  employee !: Employee


  constructor(public adminEmployeeRenderService: AdminEmployeeRenderService,
              private routerActive: ActivatedRoute,
              private router: Router,
  ) {
    this.adminEmployeeRenderService.getEmployeeRender(url + '/employeeRender/all-employee-render')
  }

  id = 0;

  ngOnInit() {
    this.id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.formEmployee = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      birth: new FormControl(''),
      age: new FormControl(''),
      phoneNumber: new FormControl(''),
      position: new FormGroup({
        id: new FormControl('')
      }),
      gender: new FormGroup({
        id: new FormControl('')
      }),
      status: new FormGroup({
        id: new FormControl('')
      }),
      user: new FormGroup({
        id: new FormControl(''),
        username: new FormControl(''),
        password: new FormControl(''),
        role: new FormGroup({
          id: new FormControl('')
        }),

      })

    })
    this.adminEmployeeRenderService.findEmployee(this.id).subscribe((data) => {
      this.employee = data
      this.formEmployee.patchValue(data)
    })

  }


  onSubmit() {

    this.employee = this.formEmployee.value;
    if (this.id != 0) {
      this.adminEmployeeRenderService.updateEmployee(this.employee, () => this.back())
    } else {
      this.adminEmployeeRenderService.createEmployee(this.employee, () => this.back())
    }

  }

  back() {
    this.router.navigate([''])
  }
}
