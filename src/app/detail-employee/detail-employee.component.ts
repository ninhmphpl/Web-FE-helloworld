import {Component, Injectable, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {AdminListPageService} from "../service/admin-list-page-service";
import {ActivatedRoute, Router} from "@angular/router";
import {environtment, HttpOptions} from "../../environments/environtment";
import {HttpHeaders, HttpParams} from "@angular/common/http";
const url = environtment.url
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit{
  employee!: Employee ;
constructor(private employeeService: AdminListPageService,
            private routerActive : ActivatedRoute,
            private router: Router) {
}

  ngOnInit(): void {
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    }
    const id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.employeeService.findEmployee(id).subscribe(data =>{
      this.employee = data
      this.employeeService.onload.onload = false
    }

    )
  }
  back(){
  this.router.navigate(['/'])
  }

}
