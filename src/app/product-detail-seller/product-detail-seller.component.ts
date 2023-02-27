import { Component } from '@angular/core';
import {ProductDetailService} from "../service/product-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {APIAny} from "../service/api-any.service";

@Component({
  selector: 'app-product-detail-seller',
  templateUrl: './product-detail-seller.component.html',
  styleUrls: ['./product-detail-seller.component.scss']
})
export class ProductDetailSellerComponent {
  imgMain = ''
  role : any

  constructor(
    public service: ProductDetailService,
    private routerActive: ActivatedRoute,
    private api : APIAny
  ) {
  }

  // khi component này được gọi hay đc sử dụng, hàm này sẽ được khởi động

  ngOnInit(): void {
    this.role = this.api.getRole()
    let id = Number(this.routerActive.snapshot.paramMap.get("id"));
    this.service.getProductDetail(id, () =>
      this.imgMain = this.service.product.picture[0].name
    );
  }

  getPicture(img: any) {
    this.imgMain = img.name
  }

}
