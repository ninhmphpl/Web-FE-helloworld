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
  getProductDetail(id: number , action ? : any) {
  //thông tin headers của reques
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    }
    //>>lấy dữ liệu thông qua đương dẫn, và khởi động 1 hàm có mong muốn kích hoạt sau khi dữ liệu được trả về thành công
    //>> hàm đó mặc định sẽ được truyền giá trị trả về sau khi kích hoạt
    this.getOne(API_URL + "/employees/product-detail/" + id, httpOptions).subscribe(data => {
      this.product = data
      action(data),
      this.onload.onload = false
    })
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
      this.onload.onload = false
    })
  }

  updateProductDetail(productDetail: any , action : any) {
    console.log(productDetail);
    
    let httpOptions: HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: environtment.token
      })
    }

    this.put(API_URL + "/employees/product-edit/" + productDetail.id , productDetail, httpOptions).subscribe(data=>{
      this.product = data
      action(data.id);
      this.onload.onload = false
    })
  }


}
