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
  public pageControl : number[] = []

  getListProduct(pageNumber : number) {
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
      params : new HttpParams().append("page", pageNumber)
    }
    this.getOne(url + "/employees/product-list", httpOptions).subscribe(data => {
      this.page = data
      this.renderFooter()
    })
  }

  nextPage(){
    this.getListProduct(this.page.pageable.pageNumber + 1)
  }

  preePage(){
    this.getListProduct(this.page.pageable.pageNumber - 1)
  }

  
  renderFooter(){
    this.pageControl = []
    let number;
    if(( number = this.page.pageable.pageNumber) >= 2){
      for(let i = number - 2 ; (i <= number + 2) && (i < this.page.totalPages) ; i++ ){
        this.pageControl.push(i)
      }
    }else{
      for(let i = 0; i < this.page.totalPages ; i++){
        this.pageControl.push(i)
      }
    }
  }




}
