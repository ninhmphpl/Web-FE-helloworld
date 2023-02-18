import {Component, Injectable, OnInit} from '@angular/core';
import {AdminEmployeeRenderService} from "../service/admin-employee-render.service";
import {environtment, HttpOptions} from "../../environments/environtment";
import {EmployeeRender} from "../model/employee-Render";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../model/employee";
import * as moment from "moment";
import {ValidatorService} from "../service/validator.service";


const url = environtment.url;

@Component({
  selector: 'app-form-employee',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  formEmployee !: FormGroup
  employee !: Employee


  constructor(public adminEmployeeRenderService: AdminEmployeeRenderService,
              private routerActive: ActivatedRoute,
              private router: Router,
              public validate : ValidatorService
  ) {
    this.adminEmployeeRenderService.getEmployeeRender(url + '/employeeRender/all-employee-render')
  }

  id = 0;

  ngOnInit() {
    this.id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.formEmployee = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      birth: new FormControl('',Validators.required),
      age: new FormControl(''),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^0[0-9]{9}")]),
      position: new FormGroup({
        id: new FormControl('',Validators.required)
      }),
      gender: new FormGroup({
        id: new FormControl('',Validators.required)
      }),
      status: new FormGroup({
        id: new FormControl('',Validators.required)
      }),
      user: new FormGroup({
        id: new FormControl(''),
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        role: new FormGroup({
          id: new FormControl('',Validators.required)
        }),

      })

    })
    this.adminEmployeeRenderService.findEmployee(this.id).subscribe((data) => {
      this.employee = data
      this.formEmployee.patchValue(data)
      this.adminEmployeeRenderService.onload.onload = false
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
    this.router.navigate(['/search'])
  }
  //  phải run npm install moment
  validatorBirth(event: any) {
    this.validate.dateBefore(16,event.target.value);
    this.validate.dateAfter(100, event.target.value)
  }
}
