import { Injectable } from '@angular/core';
import {environtment, HttpOptions} from "../../environments/environtment";
import {APIService} from "./api.service";
import {ProductDetail} from "../model/product";
import {HttpHeaders} from "@angular/common/http";
const API_URL = `${environtment.url}`
const token = environtment.token
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService extends APIService<ProductDetail>{
  public product !: ProductDetail;

  
  //lấy 1 đối tượng productDetail thông qua id.
  getProductDetail(id: number) {
  //thông tin headers của reques
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    }
    //lấy dữ liệu thông qua đương dẫn
    this.getOne(API_URL + "/employees/product-detail/" + id, httpOptions).subscribe(data => this.product = data)
  }

  addProductDetail(productDetail: any , action : any) {
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: environtment.token
      })
    }

    this.post(API_URL + "/employees/product-create/", productDetail, httpOptions).subscribe(data=>{
      this.product = data
      action(data.id);
    })
  }


}
