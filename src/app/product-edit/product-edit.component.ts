import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FireBaseService } from '../service/fire-base.service';
import { CategoryService } from '../service/category.service';
import { upFileArray } from 'src/environments/firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';
import { APIAny } from '../service/api-any.service';
import { environtment, path } from 'src/environments/environtment';
import { RoleService } from '../service/role.service';

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
    public roleService : RoleService,
  ) { }

  ngOnInit(): void {
    this.roleService.getRoleByParam(
      this.routerActive.snapshot.paramMap.get("role")
    )
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
    description: ['', [Validators.required, Validators.maxLength(200)]],
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
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))

    if (this.formCreate.valid) {

      let productDetail: any = this.formCreate.value;

      upFileArray(this.fire.files, () => {
        let urlImg = [];
        for (let file of this.fire.files) {
          urlImg.push({ name: file.url })
        }
        productDetail.picture = urlImg;
        console.log(productDetail);

        if (id > 0) {
          this.service.updateProductDetail(productDetail, (product : any) => {
            this.router.navigate(["/product/detail/" + this.roleService.role + '/' +  product.id])
          })
        } else {
          this.service.addProductDetail(productDetail, (product: any) => {
            this.router.navigate([path.product.detail + product.id])
          })
        }
      })
    }
  }



}
