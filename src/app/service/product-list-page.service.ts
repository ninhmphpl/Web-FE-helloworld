import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environtment, HttpOptions } from 'src/environments/environtment';
import { Page } from 'src/environments/page';
import { ProductSimple } from '../model/product';
import { Category } from '../model/category';

import { APIService } from './api.service';
import { APIAny } from './api-any.service';


const url = environtment.url
const categoryDefaut = {name : "Thể loại", id : 0}

@Injectable({
  providedIn: 'root'
})
export class ProductListPageService{
  url = url + "/employees/product-list"

  constructor (
    private api : APIAny
  ){}

  public page!: Page<ProductSimple>;
  public pageControl : number[] = []

  getListProduct(pageNumber : number) {
    this.api.setParam(new HttpParams().append("page", pageNumber))
    console.log("helelo" + this.url);
    
    this.api.getMapping(this.url, (data : any) => {
      this.page = data
      this.renderFooter()
    })
  }

  getSearchByNameCategoryFilter(name : any){
    this.url = url + "/product/filter/" + name
    this.getListProduct(0)
  }

  category : any = {name : 'Thể Loại' , id : 0}
  getCategoryFilter(category : any){
    this.url = url + '/employees/prodcut-list/category/' + category.id
    this.category = category
    this.getListProduct(0)
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
