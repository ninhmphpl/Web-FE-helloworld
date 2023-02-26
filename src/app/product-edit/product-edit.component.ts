import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FireBaseService } from '../service/fire-base.service';
import { CategoryService } from '../service/category.service';
import { upFileArray } from 'src/environments/firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';
import { RoleService } from '../service/role.service';
import { SellerService } from '../service/seller.service';
import { environtment, ROLE } from 'src/environments/environtment';
import { APIAny } from '../service/api-any.service';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  action = ''
  constructor(
    public service: ProductDetailService,
    public categoryService: CategoryService,
    private bf: FormBuilder,
    public fire: FireBaseService,
    private router: Router,
    private routerActive: ActivatedRoute,
    public roleService: RoleService,
    public sellerService: SellerService,
    public api: APIAny,
    public navService: NavService
  ) { }

  ngOnInit(): void {
    this.navService.choice = 1
    this.sellerService.findAllSeller()
    this.categoryService.getAllCategory()
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))

    if (id > 0) {
      this.action = 'update'
      this.service.getProductDetail(id, (data: any) => {
        this.formCreate.patchValue(data)
        this.fire.renderFormArrayImg(data.picture)
      })
    } else {
      this.action = 'create'
    }
  }

  formCreate = this.bf.group({
    id: 0,
    name: ['', [Validators.required, Validators.maxLength(100)]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(2000)]],
    quantity: [0, [Validators.required]],
    category: this.bf.group({
      name: '',
      id: ['', [Validators.required]]
    }),
    status: this.bf.group({
      name: '',
      id: 0
    })
  })

  onSubmit() {
    if (this.roleService.role == ROLE.employee) {
      this.onSubmitEmployee()
    } else {
      this.onSubmitSeller()
    }
  }
  // submit nếu role là seller
  onSubmitSeller() {
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))

    if (this.formCreate.valid) {
      this.getValue((data: any) => {
        if (id > 0) {
          this.service.updateProductDetail(data, (product: any) => {
            this.router.navigate(["/product/detail/" + this.roleService.role + '/' + product.id])
          })
        } else {
          this.service.addProductDetail(data, (product: any) => {
            this.router.navigate(["/product/detail/" + this.roleService.role + '/' + product.id])
          })
        }
      })
    }
  }

  htmlEscape(str: any) {
    return  $('<div/>').text(str).html();
  }

  getValue(data: any) {
    let productDetail: any = this.formCreate.value;
    upFileArray(this.fire.files, () => {
      let urlImg = [];
      for (let file of this.fire.files) {
        urlImg.push({ name: file.url })
      }
      productDetail.picture = urlImg;
      productDetail.description = this.htmlEscape(productDetail.description)
      console.log(productDetail);

      data(productDetail)
    })
  }

  sellerMeasser: any
  // submit nếu role là employee
  onSubmitEmployee() {
    console.log("abc");

    if (this.sellerService.seller) {
      this.sellerMeasser = ''
      let url = environtment.url + '/seller/create-product/' + this.sellerService.seller.id
      console.log(url);

      this.getValue((data: any) => {
        console.log(data);

        this.api.postMapping(url, data, (product: any) => {
          this.router.navigate(["/product/detail/" + this.roleService.role + '/' + product.id])
        })
      })

    } else {
      this.sellerMeasser = "Vui Long chọn người bán"
    }
  }



}
