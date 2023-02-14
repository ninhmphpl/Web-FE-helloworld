import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FireBaseService } from '../service/fire-base.service';
import { CategoryService } from '../service/category.service';
import { upFileArray } from 'src/environments/firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  action = ''
  constructor(
    public service: ProductDetailService,
    public categoryService: CategoryService,
    private bf: FormBuilder,
    public fire: FireBaseService,
    private router: Router,
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory()
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))
    if (id > 0) {
      this.action = 'update'
      this.service.getProductDetail(id, (data: any) => {
        this.formCreate.patchValue(data)
        this.fire.renderFormArrayImg(data.picture)
      })
    }else{
      this.action = 'create'
    }
  }

  formCreate = this.bf.group({
    id : 0,
    name: ['', [Validators.required, Validators.maxLength(100)]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    quantity: [0, [Validators.required]],
    category: this.bf.group({
      name: '',
      id: ['', [Validators.required]]
    }),
    status : this.bf.group({
      name : '',
      id : 0
    })
  })

  onSubmit() {
    this.service.onload.onload = false
    let id = Number(this.routerActive.snapshot.paramMap.get("id"))

    if (this.formCreate.valid) {
      let productDetail: any = this.formCreate.value;
      console.log(productDetail)
      upFileArray(this.fire.files, () => {
        let urlImg = [];
        for (let file of this.fire.files) {
          urlImg.push({ name: file.url })
        }
        productDetail.picture = urlImg;
        console.log(productDetail);
        this.service.onload.onload = true
        if (id > 0) {
          this.service.updateProductDetail(productDetail, (id: number) => {
            this.router.navigate(["/product-detail/" + id])
          })
        } else {
          this.service.addProductDetail(productDetail, (id: number) => {
            this.router.navigate(["/product-detail/" + id])
          })
        }

      })
    }
  }



}
