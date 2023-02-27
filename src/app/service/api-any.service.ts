import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { OnloadService } from './onload.service';

import { HttpOptions } from 'src/environments/environtment';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class APIAny {

  constructor(
    private http: HttpClient,
    public onloadService: OnloadService,
    public route: Router,
  ) { }

  getToken(){
    let data : any = localStorage.getItem('user_web')
    if(data){
      data = JSON.parse(data)
      let token = `${data.type} ${data.token}`
      console.log(token)
      return token
    }
    return 'No token'
  }
  getRole(){
    let role : any
    let data : any = localStorage.getItem('user_web')
    data = JSON.parse(data)
    if(data){
      role = data.role;
    }
    console.log(role)
    return role
  }

  httpOption: HttpOptions = {
  }

  /**
   * @param header  là kiểu dữ liệu object
   * {'Content-Type': 'application/json',
      Authorization: environtment.token}
   */
  setHeader(header: any) {
    this.httpOption.headers = header
  }
  /**
   * set dữ liệu cho param
   */
  setParam(parm: HttpParams) {
    this.httpOption.params = parm
  }

  getMapping(url: string, action: any) {
    console.log(url)
    this.onloadService.onload = true
    let token : any = this.getToken()
    this.setHeader(new HttpHeaders().append('Authorization', token))
    this.http.get<any>(url, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
        this.filterData(data, action)
        this.onloadService.onload = false
      })
  }

  /** POST: add a new object to the database */
  postMapping(url: string, object: any, action: any) {
    console.log(url)
    this.onloadService.onload = true
    let token : any = this.getToken()
    this.setHeader(new HttpHeaders().append('Authorization', token))
    this.http.post<any>(url, object, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
        this.filterData(data, action)
      })
  }

  /** DELETE: delete the hero from the server */
  deleteMapping(url: string, action: any) {
    console.log(url)
    this.onloadService.onload = true
    let token : any = this.getToken()
    this.setHeader(new HttpHeaders().append('Authorization', token))
    this.http.delete<any>(url, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
        this.filterData(data, action)
      })
  }

  /** PUT: update the object on the server. Returns the updated hero upon success. */
  putMapping(url: string, object: any, action: any) {
    console.log(url)
    this.onloadService.onload = true
    let token : any = this.getToken()
    this.setHeader(new HttpHeaders().append('Authorization', token))
    this.http.put<any>(url, object, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
        this.filterData(data, action)
      })
  }

  public filterData(data: any, action: any) {
    if (typeof data == 'string') {
      let message = data.split(',')
      this.onloadService.error = message
      this.route.navigate(['/error'])
    } else {
      console.log('data: ')
      console.log(data);
      action(data)
    }
    this.onloadService.onload = false
  }
  a = "Lỗi"
  apiError : any

  // bắt lỗi của chương trình
  private handleError(error: HttpErrorResponse) {
    console.log(this.a)

    if (error.status === 0) {
      // Lỗi trả về từ client
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      if(error.status == 400){
        this.apiError = error
     swal("Chức năng cần phải đăng nhập", "error")
      }

      console.error(
        `Backend returned code (Xảy ra lỗi phía máy chủ) ${error.status}, body was (Dữ liệu trả về): `, error.error);
    }
    // Lỗi không rõ
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'));
  }
}
