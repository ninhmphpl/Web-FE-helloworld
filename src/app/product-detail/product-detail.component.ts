import { Component } from '@angular/core';
import {ProductDetailService} from "../service/product-detail.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  constructor(
    public service: ProductDetailService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {
  }

  // khi component này được gọi hay đc sử dụng, hàm này sẽ được khởi động

  ngOnInit(): void {
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))
    console.log(id)
    this.service.getProductDetail(id)
  }
}
