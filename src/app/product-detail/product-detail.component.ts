import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from "../service/product-detail.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ROLE } from 'src/environments/environtment';

@Component({
  selector: 'app-display',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  role : any = ''
  imgMain = ''

  amount : number = 1
  amountMessage = ''
  setAmount (value : number){
    this.amountMessage = ''
    if (value < 1 ){
      this.amountMessage = "Tối thiểu là 1"
      return this.amount = 1
    } 
    if (value > this.service.product.quantity){
      this.amountMessage = "Sản phẩm này đã đạt tối đa"
      return this.amount = this.service.product.quantity
    }
    return this.amount = value
  }

  constructor(
    public service: ProductDetailService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {
  }

  // khi component này được gọi hay đc sử dụng, hàm này sẽ được khởi động

  ngOnInit(): void {
    let id = Number(this.routerActive.snapshot.paramMap.get("id"));
    this.role =  this.routerActive.snapshot.paramMap.get("role");
    this.service.getProductDetail(id, () =>
      this.imgMain = this.service.product.picture[0].name
    );
  }

  getPicture(img: any) {
    this.imgMain = img.name
  }



}
