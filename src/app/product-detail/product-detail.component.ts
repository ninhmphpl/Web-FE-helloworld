import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from "../service/product-detail.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  imgMain = ''
  amount : number = 0

  setAmount (value : number){
    if (value < 0 ) return this.amount = 0
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
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.service.getProductDetail(id, () =>
      this.imgMain = this.service.product.picture[0].name
    );
  }

  getPicture(img: any) {
    this.imgMain = img.name
  }



}
