import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environtment, HttpOptions } from 'src/environments/environtment';
import { Page } from 'src/environments/page';
import { ProductSimple } from '../model/product';
import { APIService } from './api.service';
const url = environtment.url
@Injectable({
  providedIn: 'root'
})
export class ProductListPageService extends APIService<Page<ProductSimple>> {
  
  public page!: Page<ProductSimple>;

  getListProduct(pageNumber : number) {
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
      params : new HttpParams().append("page", pageNumber)
    }
    this.getOne(url + "/employees/product-list", httpOptions).subscribe(data =>
      this.page = data
    )
  }

  changePage(pageNumber : number){
    this.getListProduct(pageNumber)
  }



}
