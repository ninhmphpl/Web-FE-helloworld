import { Component } from '@angular/core';
import {ProductDetailService} from "../service/product-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetail} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {


  constructor(
    public service: ProductDetailService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {
  }

  editForm:FormGroup= new FormGroup({
    name:new FormControl(this.service.product.name),
    price:new FormControl(this.service.product.price),
    sold:new FormControl(this.service.product.sold),
    avatar:new FormControl(this.service.product.avatar),
    description:new FormControl(this.service.product.description),
    quantity:new FormControl(this.service.product.quantity),
    picture:new FormControl(this.service.product.picture),
    category:new FormControl(this.service.product.category),
    status:new FormControl(this.service.product.status)
  })
  ngOnInit(): void {
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))
    console.log(id)
    this.service.getProductDetail(id)

    this.editForm=new FormGroup({

    })

  }



}
