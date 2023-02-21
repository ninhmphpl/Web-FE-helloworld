import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from "../service/product-detail.service";
import { ActivatedRoute, Router } from "@angular/router";
import { environtment, ROLE } from 'src/environments/environtment';
import { RoleService } from '../service/role.service';
import { FireBaseService } from '../service/fire-base.service';

@Component({
  selector: 'app-display',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  imgMain = ''

  constructor(
    public service: ProductDetailService,
    private routerActive: ActivatedRoute,
    private router: Router,
    public roleService : RoleService,
  ) {
  }

  // khi component này được gọi hay đc sử dụng, hàm này sẽ được khởi động

  ngOnInit(): void {
    let id = Number(this.routerActive.snapshot.paramMap.get("id"));
    this.roleService.getRoleByParam(
      this.routerActive.snapshot.paramMap.get("role")
    )
    
    this.service.getProductDetail(id, () =>
      this.imgMain = this.service.product.picture[0].name
    );
  }

  getPicture(img: any) {
    this.imgMain = img.name
  }




}
