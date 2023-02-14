import {Injectable} from '@angular/core';
import {APIService} from "./api.service";
import {ProductDetail} from "../model/product";
import {environtment, HttpOptions} from "../../environments/environtment";
import {HttpHeaders, HttpParams} from "@angular/common/http";

const API_URL = `${environtment.url}`

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService extends APIService<ProductDetail> {
  public product !: ProductDetail;

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
