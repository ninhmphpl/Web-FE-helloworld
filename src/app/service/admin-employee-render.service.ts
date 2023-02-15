import {Injectable} from '@angular/core';
import {APIService} from "./api.service";
import {Employee} from "../model/employee";
import {EmployeeRender} from "../model/employee-Render";
import {environtment, HttpOptions} from "../../environments/environtment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const url = environtment.url

@Injectable({
  providedIn: 'root'
})
export class AdminEmployeeRenderService extends APIService<EmployeeRender> {

  employeeRender !: EmployeeRender;

  public getEmployeeRender(url: string)  {
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    }
    this.getOne(url , httpOptions).subscribe(data => {
        this.employeeRender = data
      }
    )
  }

  updateEmployee(employee: Employee, action : any){
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    }
    let url = environtment.url
    this.put(url+'/admin', employee, httpOptions).subscribe(data => {
      action()
    })

  }
  createEmployee(employee: Employee, action : any){
    alert("hello")
    alert(JSON.stringify(employee))
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    }
    let url = environtment.url
    this.post(url+'/admin/add', employee, httpOptions).subscribe(data => {
      action()
    })

  }
}
