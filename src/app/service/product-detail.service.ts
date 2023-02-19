import { Injectable } from '@angular/core';
import { environtment } from "../../environments/environtment";
import { ProductDetail } from "../model/product";
import { APIAny } from './api-any.service';
import { CartService } from './cart.service';
const API_URL = `${environtment.url}`
const token = environtment.token
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  public product !: ProductDetail;

  constructor(
    public api: APIAny,
    public cartService : CartService,
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

  toCart(){
    let url = API_URL + `/buyer/to-cart/${this.product.id}/${this.amount}`
    this.api.postMapping(url,{} ,(data : any)=>{
      this.cartService.cart = data
    })
  }

  amount : number = 1
  amountMessage = ''
  setAmount (value : number){
    this.amountMessage = ''
    if (value < 1 ){
      this.amountMessage = "Tối thiểu là 1"
      return this.amount = 1
    } 
    if (value > this.product.quantity){
      this.amountMessage = "Sản phẩm này đã đạt tối đa"
      return this.amount = this.product.quantity
    }
    return this.amount = value
  }


}
