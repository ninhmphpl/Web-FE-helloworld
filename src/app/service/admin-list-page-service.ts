import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environtment, HttpOptions } from 'src/environments/environtment';
import { Page } from 'src/environments/page';
import { ProductSimple } from '../model/product';
import { APIService } from './api.service';
import {catchError, Observable, throwError} from "rxjs";
import {Employee} from "../model/employee";
const url = environtment.url
@Injectable({
  providedIn: 'root'
})
export class AdminListPageService extends APIService<Page<Employee>>{
  public page!: Page<Employee>;

  getListEmployee(pageNumber : number) {
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
      params : new HttpParams().append("page", pageNumber)
    }
    this.getOne(url + "/admin/employee-list", httpOptions).subscribe(data =>
      this.page = data
    )
  }
  changePage(pageNumber : number){
    this.getListEmployee(pageNumber)
  }

}

