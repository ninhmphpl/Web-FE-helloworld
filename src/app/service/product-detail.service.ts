import { Injectable } from '@angular/core';
import { environtment } from "../../environments/environtment";
import { ProductDetail } from "../model/product";
import { APIAny } from './api-any.service';
const API_URL = `${environtment.url}`
const token = environtment.token
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  public product !: ProductDetail;

  constructor(
    public api: APIAny
  ) { }


  getProductDetail(id: number, action?: any) {
    let url = API_URL + "/employees/product-detail/" + id
    this.api.getMapping(url, (data : any)=>{
      this.product = data
      action(data)
    })
  }

  addProductDetail(productDetail: any, action: any) {
    let url = API_URL + "/employees/product-create/"
    this.api.postMapping(url, productDetail, action)
  }

  updateProductDetail(productDetail: any, action: any) {
    let url = API_URL + "/employees/product-edit/" + productDetail.id
    this.api.putMapping(url, productDetail, action)
  }


}
