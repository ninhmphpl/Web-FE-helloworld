import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environtment, HttpOptions } from 'src/environments/environtment';
import { Page } from 'src/environments/page';
import { ProductSimple } from '../model/product';
import { Category } from '../model/category';

import { APIService } from './api.service';

interface Filter{
  category : Category;
}

const url = environtment.url
const categoryDefaut = {name : "Thể loại", id : 0}

@Injectable({
  providedIn: 'root'
})
export class ProductListPageService extends APIService<Page<ProductSimple>> {

  public page!: Page<ProductSimple>;
  public pageControl : number[] = []
  public filter : Filter = {category : categoryDefaut}

  getListProduct(pageNumber : number) {
    this.onload.onload = false
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: environtment.token
      }),
      params : new HttpParams().append("page", pageNumber)
    }
    let urls = url + "/employees/product-list"
    //>> nếu có category.id nào khác 0 thì sẽ thay đổi đường dẫn, ngược lại dữ nguyên đường dẫn ban đầu
    if (this.filter.category.id != 0 ){
      urls = url + '/employees/prodcut-list/category/' + this.filter.category.id
    }

    this.getOne(urls, httpOptions).subscribe(data => {
      this.page = data
      this.renderFooter()
      this.onload.onload = true
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
